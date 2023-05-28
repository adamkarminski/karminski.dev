<template>
	<div>
			<h2 class="mb-5 text-2xl font-black">{{ title }}</h2>
			<div class="flex flex-col gap-5">
				<SectionCard v-for="item in items" :key="item.key">
					<slot :item="item" />
				</SectionCard>
			</div>
		</div>
</template>

<script setup lang="ts" generic="T extends IterableItem">
import { IterableItem } from 'types/content';

const props = defineProps<{ title: string, items: T[] }>()
</script>
