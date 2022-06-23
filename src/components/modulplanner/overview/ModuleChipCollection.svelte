<script>
  import ModuleChip from "../modulechip/ModuleChip.svelte";
  import {ModuleGroupSource} from "../constants";

  export let modules;
  export let userDataVal;
  export let source = ModuleGroupSource.UNKNOWN;

  const additionalModules = source === ModuleGroupSource.ADDITIONAL_MODULES;
  const projects = source === ModuleGroupSource.PROJECTS;
  const contextModules = source === ModuleGroupSource.CONTEXT;
</script>

<div
  class="grid lg:grid-cols-1 gap-3"
  class:grid-cols-4={additionalModules || projects || contextModules}
  class:lg:grid-cols-12={additionalModules}
  class:lg:grid-cols-1={projects}
  class:lg:grid-cols-6={contextModules}>
  {#each modules as module}
    <ModuleChip {module} {userDataVal} />
  {/each}
</div>
