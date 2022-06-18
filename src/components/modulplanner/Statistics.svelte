<script>
	import {get} from "svelte/store";
	import {userData} from "./stores.js";
	import {modules, allModules} from "./modules.js";
	import {Status} from "./constants.js";

	const userDataValue = get(userData)
	const totalCredits = userDataValue
			.filter(s => s.status === Status.COMPLETED || s.fulfilled)
			.map(s => allModules.find(m => m.id === s.id).credits)
			.reduce(sum, 0)

	const projectIds = modules.projects.modules.map(m => m.id)
	const projectCredits = userDataValue
			.filter(s => isModuleStatusCompletedInGroup(s, projectIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const mainIds = [
		...modules.mainModules.baseModules.prog.modules,
		...modules.mainModules.baseModules.swe.modules,
		...modules.mainModules.baseModules.ict.modules,
		...modules.mainModules.baseModules.math.modules,
		...modules.mainModules.advancedModules.ict,
		...modules.mainModules.advancedModules.web,
		...modules.mainModules.advancedModules.dataSci,
		...modules.mainModules.advancedModules.spatialComp,
		...modules.mainModules.additionalModules.modules
	].map(m => m.id)
	const mainCredits = userDataValue
			.filter(s => isModuleStatusCompletedInGroup(s, mainIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const completedCredits = [
		{
			title: "Credits",
			credits: totalCredits,
			minCredits: modules.minCredits
		},
		{
			title: "Projektcredits",
			credits: projectCredits,
			minCredits: modules.projects.minCredits
		},
		{
			title: "Fachausbildungscredits",
			credits: mainCredits,
			minCredits: modules.mainModules.minCredits
		},
	]

	const plannedCredits = userDataValue.filter(s => s.status !==
			Status.NOT_TAKEN)
			.map(moduleStatusToCredits)
			.reduce((a, b) => a + b, 0)

	function sum(a, b) {
		return a + b
	}

	function isModuleStatusCompletedInGroup(s, ids) {
		return (s.status === Status.COMPLETED || s.fulfilled) &&
				ids.includes(s.id)
	}

	function moduleStatusToCredits(s) {
		return allModules.find(m => m.id === s.id).credits
	}

	function formatCreditPercentage(credits, minCredits) {
		return Math.round(10 * 100 * (credits / minCredits)) / 10
	}
</script>

<div class="container mx-auto mt-8">
	<h1 class="text-4xl font-bold">Statistiken</h1>
	<h2 class="text-3xl font-semibold mt-5">Studiumsfortschritt</h2>

	<div class="d-stats shadow">
		{#each completedCredits as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">{completedStat.title}</div>
				<div class="d-stat-value">
					{formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits absolviert
				</div>
			</div>
		{/each}
	</div>

	<h2 class="text-3xl font-semibold mt-5">Studiumsplan</h2>
	<!-- TODO(laniw): Add indicator of credits over max -->
	geplante Credits: {plannedCredits}/180
	<progress class="d-progress d-progress-primary w-56"
	          value={plannedCredits}
	          max="180"></progress>

</div>