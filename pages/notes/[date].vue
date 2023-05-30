<template>
	<div class="mb-10">
		<NuxtLink :to="backToRoute">← Back to Notes</NuxtLink>
	</div>
	<ContentDoc v-slot="{ doc }">
		<article>
			<header>
				<h1 class="text-3xl font-black mb-10">{{ route.params.date }}</h1>
				<div class="prose prose-invert">
					<ContentRenderer :value="doc"/>
				</div>
			</header>
		</article>
	</ContentDoc>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute()

useHead({
	titleTemplate: `${route.params.date} - Notes - Adam Karmiński`
})

const backToRoute = computed(() => {
	return router.options.history.state.back ? router.options.history.state.back.toString() : '/notes'
})
</script>
