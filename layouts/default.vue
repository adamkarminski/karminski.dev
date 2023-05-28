<template>
	<header class="sticky top-0 z-10 bg-gray-950 bg-opacity-50 backdrop-blur">
		<div class="mx-auto flex max-w-3xl px-4 items-center justify-between py-5">
			<NuxtLink to="/">
				<img class="h-10 w-10 transition-transform origin-[50%_66%] hover:rotate-[120deg]" src="/karminski_logo.svg" alt="Adam Karmiński" />
			</NuxtLink>
			<div class="font-bold">
				<NuxtLink to="/notes" class="transition-colors text-text hover:text-emerald-500">Notes</NuxtLink>
			</div>
		</div>
	</header>
	<main class="mx-auto max-w-3xl mt-10 px-4">
		<slot />
	</main>
	<footer class="mt-20 mb-36">
		<p class="text-center text-sm text-text-weak">&copy; by Adam Karmiński</p>
	</footer>
</template>

<script setup lang="ts"></script>
