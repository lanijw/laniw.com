<script>
	import {NAVBAR_PLANING_LABEL} from "../constants";
	import {userData} from "../stores";
	import ModuleChip from "../components/ModuleChip.svelte";
	import {allModules} from "../modules";
	import {onDestroy} from "svelte";

	let userDataVal = []
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())

	let semesters
	$: semesters = Array.from(Array(12).keys()).map(v => 1 + v).map(n => {
		return {
			n: n, modules: userDataVal.filter(s => s.sem === n).map(s => {
				return {status: s, module: allModules.find(m => m.name === s.id)}
			})
		}
	})
</script>

<div class="container mx-auto mt-3">
	<h1 class="text-4xl font-bold">{@html NAVBAR_PLANING_LABEL}</h1>
	{#each semesters as semester}
		<h2 class="text-3xl font-semibold">Semester {semester.n}</h2>
		<div class="mb-5 grid grid-cols-12 gap-4">
			{#each semester.modules as module}
				<div>
					<ModuleChip module={module.module}/>
				</div>
			{/each}
		</div>
	{/each}
</div>