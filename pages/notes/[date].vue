<template>
	<ContentDoc v-slot="{ doc }">
		<article>
			<header>
				<h1 class="text-3xl font-black mb-10">{{ doc.title }}</h1>
				<ContentRenderer :value="doc"/>
			</header>
		</article>
	</ContentDoc>
</template>

<script setup lang="ts"></script>
