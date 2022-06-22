<script>
  import ModuleGroupContainer from "./ModuleGroupContainer.svelte";
  import ModuleChipCollection from "./ModuleChipCollection.svelte";
  import ModuleGroup
    from "../../../.svelte-kit/output/server/chunks/Overview-726258ee";

  export let title;
  export let modules;
  export let userDataVal;
  export let borderColor;
  export let source = ModuleGroup.UNKNOWN;
</script>

<ModuleGroupContainer {borderColor}>
  <span class="text-l font-semibold break-words" style="hyphens: manual">{@html title}</span>
  <ModuleChipCollection {modules} {userDataVal} {source}/>
</ModuleGroupContainer>
