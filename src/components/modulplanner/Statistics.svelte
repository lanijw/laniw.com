<script>
	import {get} from "svelte/store";
	import {userData} from "./stores.js";
	import {allModules} from "./modules.js";
	import {Status} from "./constants.js";

	const userDataValue = get(userData)
	const totalCredits = userDataValue.filter(s => s.status ===
			Status.COMPLETED1 ||
			s.status ===
			Status.COMPLETED2 ||
			s.fulfilled)
			.map(s => allModules.find(m => m.name === s.id).credits)
			.reduce((a, b) => a + b, 0)
	const plannedCredits = userDataValue.filter(s => s.status !==
			Status.NOT_TAKEN)
			.map(s => allModules.find(m => m.name === s.id).credits)
			.reduce((a, b) => a + b, 0)
</script>

<div class="container mx-auto mt-8">
	<h1 class="text-4xl font-bold">Statistiken</h1>
	<h2 class="text-3xl font-semibold mt-5">Studiumsfortschritt</h2>

	Gesamtcredits: {totalCredits}/180
	<progress class="d-progress d-progress-primary w-56"
	          value={totalCredits}
	          max="180"></progress>

	<h2 class="text-3xl font-semibold mt-5">Studiumsplan</h2>
	<!-- TODO(laniw): Add indicator of credits over max -->
	geplante Credits: {plannedCredits}/180
	<progress class="d-progress d-progress-primary w-56"
	          value={plannedCredits}
	          max="180"></progress>

</div>