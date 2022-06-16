<script>
	import ModuleGroupContainer from "./ModuleGroupContainer.svelte";
	import ModuleChipCollection from "./ModuleChipCollection.svelte";

	export let title;
	export let modules;
	export let userDataVal;
	export let borderColor;
</script>

<ModuleGroupContainer borderColor={borderColor}>
	<span class="text-l font-semibold">{@html title}</span>
	<ModuleChipCollection {modules} {userDataVal}/>
</ModuleGroupContainer>