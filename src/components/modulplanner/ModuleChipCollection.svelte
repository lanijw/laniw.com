<script>
  import ModuleChip from "./ModuleChip.svelte";
  import {ModuleGroupSource} from "./constants";

  export let modules;
  export let userDataVal;
  export let source = ModuleGroupSource.UNKNOWN;
</script>

<div
  class="grid lg:grid-cols-1 gap-2 lg:gap-3"
  class:grid-cols-3={source === ModuleGroupSource.ADDITIONAL_MODULES ||
    source === ModuleGroupSource.PROJECTS || source === ModuleGroupSource.CONTEXT}>
  {#each modules as module}
    <ModuleChip {module} {userDataVal} />
  {/each}
</div>
