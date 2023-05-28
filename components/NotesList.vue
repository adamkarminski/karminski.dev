<template>
	<div v-if="hasNotes">
		<SectionCard class="mb-10" v-for="note in notes" :key="note._path">
			<article>
				<header>
					<h1 class="mb-5 text-xl font-black">
						{{ getTitleFromPath(note._path) }}
					</h1>
				</header>
				<div class="prose prose-invert">
					<ContentRenderer :value="note"></ContentRenderer>
				</div>
			</article>
		</SectionCard>
		<div class="mt-4 flex items-center justify-between">
			<div class="flex items-center">
				<NuxtLink v-if="hasPreviousPage" :to="`/notes?page=${page - 1}`"
					>↤ Previous page</NuxtLink
				>
			</div>
			<div class="flex items-center">
				<NuxtLink v-if="hasNextPage" :to="`/notes?page=${page + 1}`"
					>Next page ↦</NuxtLink
				>
			</div>
		</div>
	</div>
	<div v-else>No entries found. Go back to <NuxtLink to="/notes">Notes</NuxtLink>.</div>
</template>

<script setup lang="ts">
	import { type Note } from 'types/content';

	const route = useRoute();
	const page: ComputedRef<number> = computed(() =>
		route.query.page && typeof route.query.page === 'string'
			? Number.parseInt(route.query.page)
			: 1
	);

	const LIMIT = 5;
	const skip = computed(() => (page.value - 1) * LIMIT);
	const query = await queryContent<Note>('notes')
		.sort({ _path: -1 })
		.limit(LIMIT + 1)
		.skip(skip.value)
		.find();

	const notes = computed(() => (query.length > LIMIT ? query.slice(0, -1) : query));

	const hasNotes = computed(() => notes.value.length > 0);

	const hasNextPage = computed(() => query.length === LIMIT + 1);
	const hasPreviousPage = computed(() => page.value > 1);

	const POST_TITLE_REGEXP = /^\/notes\/(.*)$/;
	const getTitleFromPath = (path: string) => {
		const match = path.match(POST_TITLE_REGEXP);
		return match ? match[1] : '';
	};
</script>
