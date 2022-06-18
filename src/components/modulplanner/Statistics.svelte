<script>
	import {get} from "svelte/store";
	import {userData} from "./stores.js";
	import {allModules, modules, Profile} from "./modules.js";
	import {Status} from "./constants.js";
	import CheckIcon from "../icons/CheckIcon.svelte";
	import CloseIcon from "../icons/CloseIcon.svelte";

	const userDataValue = get(userData)

	const totalCredits = userDataValue.s
			.filter(s => s.status === Status.COMPLETED || s.fulfilled)
			.map(s => allModules.find(m => m.id === s.id).credits)
			.reduce(sum, 0)
	const plannedTotalCredits = userDataValue.s.filter(s => s.status !==
			Status.NOT_TAKEN)
			.map(moduleStatusToCredits)
			.reduce((a, b) => a + b, 0)

	const projectIds = modules.projects.modules.map(m => m.id)
	const projectCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, projectIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedProjectCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, projectIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const progIds = modules.mainModules.baseModules.prog.modules.map(m => m.id)
	const progCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, progIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedProgCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, progIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const sweIds = modules.mainModules.baseModules.swe.modules.map(m => m.id)
	const sweCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, sweIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedSweCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, sweIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const ictIds = modules.mainModules.baseModules.ict.modules.map(m => m.id)
	const ictCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, ictIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedIctCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, ictIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const mathIds = modules.mainModules.baseModules.math.modules.map(m => m.id)
	const mathCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, mathIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedMathCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, mathIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const advancedIds = [
		...modules.mainModules.advancedModules.ict.modules,
		...modules.mainModules.advancedModules.web.modules,
		...modules.mainModules.advancedModules.dataSci.modules,
		...modules.mainModules.advancedModules.spatialComp.modules,
	].map(m => m.id)
	const advancedCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, advancedIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedAdvancedCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, advancedIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const additionalIds = modules.mainModules.additionalModules.modules.map(m => m.id)
	const additionalCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, additionalIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedAdditionalCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, additionalIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const mainIds = [
		...advancedIds, ...progIds, ...sweIds, ...ictIds, ...mathIds,
		...additionalIds
	]
	const mainCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, mainIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)
	const plannedMainCredits = userDataValue.s
			.filter(s => isModuleStatusPlannedInGroup(s, mainIds))
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
		{
			title: "Programmiercredits",
			credits: progCredits,
			minCredits: modules.mainModules.baseModules.prog.minCredits
		},
		{
			title: "SWE Credits",
			credits: sweCredits,
			minCredits: modules.mainModules.baseModules.swe.minCredits
		},
		{
			title: "ICT Credits",
			credits: ictCredits,
			minCredits: modules.mainModules.baseModules.ict.minCredits
		},
		{
			title: "Mathematikcredits",
			credits: mathCredits,
			minCredits: modules.mainModules.baseModules.math.minCredits
		},
		{
			title: "Fachvertiefungscredits",
			credits: advancedCredits,
			minCredits: modules.mainModules.advancedModules.minCredits
		},
		{
			title: "Fachergänzungscredits",
			credits: additionalCredits,
			minCredits: modules.mainModules.additionalModules.minCredits
		},
	]

	const plannedCredits = [
		{
			title: "Credits",
			credits: plannedTotalCredits,
			minCredits: modules.minCredits
		},
		{
			title: "Projektcredits",
			credits: plannedProjectCredits,
			minCredits: modules.projects.minCredits
		},
		{
			title: "Fachausbildungscredits",
			credits: plannedMainCredits,
			minCredits: modules.mainModules.minCredits
		},
		{
			title: "Programmiercredits",
			credits: plannedProgCredits,
			minCredits: modules.mainModules.baseModules.prog.minCredits
		},
		{
			title: "SWE Credits",
			credits: plannedSweCredits,
			minCredits: modules.mainModules.baseModules.swe.minCredits
		},
		{
			title: "ICT Credits",
			credits: plannedIctCredits,
			minCredits: modules.mainModules.baseModules.ict.minCredits
		},
		{
			title: "Mathematikcredits",
			credits: plannedMathCredits,
			minCredits: modules.mainModules.baseModules.math.minCredits
		},
		{
			title: "Fachvertiefungscredits",
			credits: plannedAdvancedCredits,
			minCredits: modules.mainModules.advancedModules.minCredits
		},
		{
			title: "Fachergänzungscredits",
			credits: plannedAdditionalCredits,
			minCredits: modules.mainModules.additionalModules.minCredits
		},
	]

	const dataSciProfileIds = allModules.filter(m => m.relevantProfile ===
			Profile.DATA_SCI)
	const completedDataSciProfileCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, dataSciProfileIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const ictProfileIds = allModules.filter(m => m.relevantProfile ===
			Profile.ICT)
	const completedIctProfileCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, ictProfileIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const spatialCompProfileIds = allModules.filter(m => m.relevantProfile ===
			Profile.SPATIAL_COMP)
	const completedSpatialCompProfileCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, spatialCompProfileIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const webProfileIds = allModules.filter(m => m.relevantProfile ===
			Profile.WEB)
	const completedWebProfileCredits = userDataValue.s
			.filter(s => isModuleStatusCompletedInGroup(s, webProfileIds))
			.map(moduleStatusToCredits)
			.reduce(sum, 0)

	const profileCredits = [
		{
			title: "Data Science",
			credits: completedDataSciProfileCredits,
			minCredits: modules.mainModules.advancedModules.dataSci.minModules * 3,
			workshopId: modules.mainModules.advancedModules.dataSci.requiredModule,
			workshopCompleted: isModuleCompleted(modules.mainModules.advancedModules.dataSci.requiredModule)
		},
		{
			title: "ICT",
			credits: completedIctProfileCredits,
			minCredits: modules.mainModules.advancedModules.ict.minModules * 3,
			workshopId: modules.mainModules.advancedModules.ict.requiredModule,
			workshopCompleted: isModuleCompleted(modules.mainModules.advancedModules.ict.requiredModule)
		},
		{
			title: "Spatial Computing",
			credits: completedSpatialCompProfileCredits,
			minCredits: modules.mainModules.advancedModules.spatialComp.minModules *
					3,
			workshopId: modules.mainModules.advancedModules.spatialComp.requiredModule,
			workshopCompleted: isModuleCompleted(modules.mainModules.advancedModules.spatialComp.requiredModule)
		},
		{
			title: "Web",
			credits: completedWebProfileCredits,
			minCredits: modules.mainModules.advancedModules.web.minModules * 3,
			workshopId: modules.mainModules.advancedModules.web.requiredModule,
			workshopCompleted: isModuleCompleted(modules.mainModules.advancedModules.web.requiredModule)
		},
	]

	function sum(a, b) {
		return a + b
	}

	function isModuleStatusCompletedInGroup(s, ids) {
		return (s.status === Status.COMPLETED || s.fulfilled) &&
				ids.includes(s.id)
	}

	function isModuleStatusPlannedInGroup(s, ids) {
		return s.status !== Status.NOT_TAKEN && ids.includes(s.id)
	}

	function moduleStatusToCredits(s) {
		return allModules.find(m => m.id === s.id).credits
	}

	function formatCreditPercentage(credits, minCredits) {
		const result = Math.round(10 * 100 * (credits / minCredits)) / 10
		return minCredits === 0 ? "&infin;" : result
	}

	function isModuleCompleted(id) {
		const status = userDataValue.s.find(s => s.id === id);
		return status.status === Status.COMPLETED || status.fulfilled;
	}
</script>

<div class="container mx-auto mt-8">
	<h1 class="text-4xl font-bold">Statistiken</h1>
	<h2 class="text-3xl font-semibold mt-5">Studiumsfortschritt</h2>

	<div class="d-stats shadow m-4">
		{#each completedCredits.slice(1, 3) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">{completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits absolviert
				</div>
			</div>
		{/each}
	</div>

	<div class="d-stats shadow m-4">
		{#each completedCredits.slice(3, 7) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">{completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits absolviert
				</div>
			</div>
		{/each}
	</div>

	<div class="d-stats shadow m-4">
		{#each completedCredits.slice(7, 9) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">{completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits absolviert
				</div>
			</div>
		{/each}
	</div>

	<h3 class="text-2xl font-semibold mt-5">Profilabsolvierung</h3>

	<div class="grid grid-cols-2">
		{#each profileCredits as p}
			<div>
				<h4 class="text-xl font-semibold mt-5">{p.title}</h4>

				<div class="d-stats shadow m-4">
					<div class="d-stat">
						<div class="d-stat-title">Credits</div>
						<div class="d-stat-value">
							{@html formatCreditPercentage(p.credits, p.minCredits)}%
						</div>
						<div class="d-stat-desc">
							{p.credits}/{p.minCredits} Credits absolviert
						</div>
					</div>
					<div class="d-stat">
						<div class="d-stat-title">Workshop</div>
						<div class="d-stat-value h-9">
							{#if p.workshopCompleted}
								<CheckIcon/>
							{:else}
								<CloseIcon/>
							{/if}
						</div>
						<div class="d-stat-desc">
							{p.workshopId}
							{#if !p.workshopCompleted}
								nicht
							{/if}
							absolviert
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h2 class="text-3xl font-semibold mt-5">Studiumplanung</h2>

	<div class="d-stats shadow m-4">
		{#each plannedCredits.slice(1, 3) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">Geplante {completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits
					geplant/absolviert
				</div>
			</div>
		{/each}
	</div>

	<div class="d-stats shadow m-4">
		{#each plannedCredits.slice(3, 7) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">Geplante {completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits
					geplant/absolviert
				</div>
			</div>
		{/each}
	</div>

	<div class="d-stats shadow m-4">
		{#each plannedCredits.slice(7, 9) as completedStat}
			<div class="d-stat">
				<div class="d-stat-title">Geplante {completedStat.title}</div>
				<div class="d-stat-value">
					{@html formatCreditPercentage(completedStat.credits,
							completedStat.minCredits)}%
				</div>
				<div class="d-stat-desc">
					{completedStat.credits}/{completedStat.minCredits} Credits
					geplant/absolviert
				</div>
			</div>
		{/each}
	</div>

</div>