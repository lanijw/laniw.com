<script>
	import {onDestroy} from "svelte";
	import ModuleChip from "./ModuleChip.svelte";
	import {allModules} from "./modules.js";
	import {userData} from "./stores";

	let userDataVal = []
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())

	let semesters
	$: semesters = Array.from(Array(12).keys()).map(v => 1 + v).map(n => {
		return {
			n: n,
			modules: userDataVal.filter(s => s.sem === n).map(s => {
				return {status: s, module: allModules.find(m => m.id === s.id)}
			})
		}
	})
</script>

<div class="container mx-auto mt-3">
	<h1 class="text-4xl font-bold">Studiumsplanung</h1>
	{#each semesters as semester}
		{#if semester.modules.length}
			<h2 class="text-3xl font-semibold">Semester {semester.n}</h2>
			<div class="mb-5 grid grid-cols-12 gap-4">
				{#each semester.modules as module}
					<div>
						<ModuleChip module={module.module} {userDataVal} fromPlan={true}/>
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>