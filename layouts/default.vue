<template>
	<header class="sticky top-0 z-10 bg-gray-950 bg-opacity-50 backdrop-blur">
		<div class="mx-auto flex max-w-3xl items-center justify-between px-4 py-5">
			<NuxtLink to="/">
				<img
					class="h-10 w-10 origin-[50%_66%] transition-transform hover:rotate-[120deg]"
					src="/karminski_logo.svg"
					alt="Adam Karmiński"
				/>
			</NuxtLink>
		</div>
	</header>
	<main class="mx-auto mt-10 max-w-3xl px-4">
		<slot />
	</main>
	<footer class="mb-36 mt-20">
		<p class="text-center text-sm text-text-ghost">&copy; by Adam Karmiński</p>
	</footer>
</template>

<script setup lang="ts"></script>
