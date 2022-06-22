<script>
  import ModuleChip from "./ModuleChip.svelte";
  import {ModuleGroupSource} from "./constants";

  export let modules;
  export let userDataVal;
  export let source = ModuleGroupSource.UNKNOWN;

  const threeCols =
    source === ModuleGroupSource.ADDITIONAL_MODULES ||
    source === ModuleGroupSource.PROJECTS;
  const fourCols = source === ModuleGroupSource.CONTEXT;
</script>

<div
  class="grid lg:grid-cols-1 gap-3"
  class:grid-cols-3={threeCols}
  class:grid-cols-4={fourCols}>
  {#each modules as module}
    <ModuleChip {module} {userDataVal} />
  {/each}
</div>
