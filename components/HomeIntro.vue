<template>
	<SectionCard>
		<div class="flex items-center gap-5">
			<div class="flex flex-1 flex-col gap-2">
				<h2 class="text-3xl font-black">
					Hi,
					<span
						class="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
					>
						Adam
					</span>
					here.
				</h2>
				<p class="text-text-weak">
					Co-founder and CTO of
					<a href="https://bethinkgroup.com" rel="noopener" target="_blank"
						>Bethink</a
					>
					and <a href="https://klasa.io" rel="noopener" target="_blank">Klasa.io</a>.
					Co&#8209;founder of
					<a href="https://dailyboard.io" rel="noopener" target="_blank"
						>Dailyboard</a
					>.
				</p>

				<div class="mt-4 flex items-center space-x-6 md:order-2">
					<a
						href="https://pl.linkedin.com/in/adamkarminski"
						class="fill-text-weak transition-colors hover:fill-emerald-400"
						target="_blank"
					>
						<span class="sr-only">LinkedIn</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							class="h-6 w-6"
						>
							<path
								d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
							></path>
						</svg>
					</a>
					<a
						href="https://twitter.com/adamkarminski"
						class="text-text-weak transition-colors hover:text-emerald-400"
						target="_blank"
					>
						<span class="sr-only">Twitter</span>
						<svg
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							></path>
						</svg>
					</a>
					<a
						href="https://github.com/adamkarminski"
						class="text-text-weak transition-colors hover:text-emerald-400"
						target="_blank"
					>
						<span class="sr-only">GitHub</span>
						<svg
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="flex flex-shrink-0 items-start self-stretch md:items-center">
				<img
					src="/AK_Avatar_Emerald.png"
					alt="Adam's face."
					class="h-16 w-16 rounded-full sm:h-24 sm:w-24 md:h-36 md:w-36"
				/>
			</div>
		</div>
	</SectionCard>
</template>

<script setup lang="ts"></script>
