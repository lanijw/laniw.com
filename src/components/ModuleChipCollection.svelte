<script>
	import ModuleChip from "./ModuleChip.svelte";

	export let modules;
	export let userDataVal;
</script>

{#each modules as module}
	<ModuleChip {module} {userDataVal}/>
{/each}