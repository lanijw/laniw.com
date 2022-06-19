<script>
	import {currPage} from "../../../stores.js";
	import {onDestroy} from "svelte";
	import {Page} from "../../../constants";
	import {userData} from "../../../components/modulplanner/stores";
	import Statistics from "../../../components/modulplanner/Statistics.svelte";
	import Plan from "../../../components/modulplanner/Plan.svelte";
	import {Status} from "../../../components/modulplanner/constants";
	import Overview from "../../../components/modulplanner/Overview.svelte";

	currPage.set(Page.MODULE_PLANNER);

	let userDataVal;
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())

	const Section = {
		OVERVIEW: 0,
		STATISTICS: 1,
		PLAN: 2
	}

	let currentSection = Section.OVERVIEW;
</script>

<div class="d-tabs flex justify-center mt-10">
	<button class="d-tab d-tab-lg d-tab-lifted font-bold"
	        class:d-tab-active={currentSection === Section.OVERVIEW}
	        on:click={() => currentSection = Section.OVERVIEW}>
		&Uuml;bersicht
	</button>
	<button class="d-tab d-tab-lg d-tab-lifted font-bold"
	        class:d-tab-active={currentSection === Section.STATISTICS}
	        on:click={() => currentSection = Section.STATISTICS}>
		Statistiken
	</button>
	{#if userDataVal.s.filter(s => s.status !==
			Status.NOT_TAKEN &&
			!(s.sem === undefined || s.sem === null)).length}
		<button class="d-tab d-tab-lg d-tab-lifted font-bold"
		        class:d-tab-active={currentSection === Section.PLAN}
		        on:click={() => currentSection = Section.PLAN}>
			Planung
		</button>
	{/if}
</div>

<!--<p slot="fallback">
	loading...
</p>-->

{#if currentSection === Section.OVERVIEW}
	<Overview {userDataVal}/>
{:else if currentSection === Section.STATISTICS}
	<Statistics/>
{:else if currentSection === Section.PLAN}
	<Plan/>
{/if}