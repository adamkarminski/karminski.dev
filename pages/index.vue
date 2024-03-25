<template>
	<div class="flex flex-col gap-10">
		<HomeIntro />
		<HomeSection title="Articles" :items="articles" v-slot="{ item }">
			<a :href="item.url" target="_blank">
				<h3 class="mb-2 text-lg font-black">{{ item.title }}</h3>
			</a>
			<p class="text-text-weak" v-html="item.description"></p>
		</HomeSection>
		<HomeSection title="Talks and appearances" :items="appearances" v-slot="{ item }">
			<a :href="item.url" target="_blank">
				<h3 class="mb-2 text-lg font-black">{{ item.title }}</h3>
			</a>
			<p class="text-text-weak" v-html="item.description"></p>
		</HomeSection>
	</div>
</template>

<script setup lang="ts">
	useHead({
		titleTemplate: 'Adam Karmiński - Notes and stuff',
	});

	const articles = [
		{
			key: 4,
			title: '🇺🇸 Avoid bloated backlogs and The Sea of Mold — a scalable Jira setup for managing your Product and Teams projects effectively',
			categories: 'Product management',
			description:
				"An article on the setup I use to effectively manage development of Bethink's core product.",
			url: 'https://geek.justjoin.it/engineering-stages-czyli-jak-rozwijac-zespol/',
		},
		{
			key: 3,
			title: '🇵🇱 Engineering Stages, czyli jak lepiej rozwijać zespół, używając standardów?',
			categories: 'Leadership',
			description:
				'An article on how to use an action-based framework to manage personal growth in an engineering team.',
			url: 'https://geek.justjoin.it/engineering-stages-czyli-jak-rozwijac-zespol/',
		},
		{
			key: 2,
			title: '🇺🇸 Decision log using Jira and Automation — the Holy Grail of documenting decisions?',
			categories: 'Project Management',
			description:
				'An article on how to set up a robust decision log for the whole company using a Jira project.',
			url: 'https://medium.com/bethink-pl/decision-log-using-jira-and-automation-the-holy-grail-of-documenting-decisions-8d37ad3f1f2b',
		},
		{
			key: 1,
			title: '🇺🇸 Building the Bridge of Trust — 7 factors that make your company more trustworthy',
			categories: 'Product Management',
			description:
				'An article on how to use a trust-building model known from leadership and apply it to your product.',
			url: 'https://medium.com/bethink-pl/building-the-bridge-of-trust-5afcb453626f',
		},
	];

	const appearances = [
		{
			key: 1,
			title: '🇵🇱 Videocast with Kamil Cebulski',
			description:
				'A conversation with Kamil Cebulski, the founder of Asbiro entrepreneurship school, on building an e-learning business at Bethink.',
			url: 'https://www.youtube.com/watch?v=smYd8jj7oGk&pp=ygUPYWRhbSBrYXJtacWEc2tp',
		},
		{
			key: 2,
			title: '🇵🇱 Podcast with Explain Visually',
			description:
				'A conversation with Maciej Budkowski, COO of <a href="https://explainvisually.co/en/" target="_blank">ExplainVisually</a>, on building an e-learning business at Bethink.',
			url: 'https://www.youtube.com/watch?v=0ZySDjZUctM&pp=ygUPYWRhbSBrYXJtacWEc2tp',
		},
		{
			key: 3,
			title: '🇵🇱 Talk at RSQ meet-up',
			description:
				'Talk based on my article - Building the Bridge of Trust (see Articles).',
			url: 'https://www.youtube.com/watch?v=twq1TKV4mRU&t=1s&pp=ygUPYWRhbSBrYXJtacWEc2tp',
		},
	];
</script>
