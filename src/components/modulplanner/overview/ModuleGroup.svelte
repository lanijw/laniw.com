<script>
  import ModuleChipCollection from "./ModuleChipCollection.svelte";
  import {ModuleGroupSource} from "../constants";

  export let title;
  export let modules;
  export let userDataVal;
  export let borderColor = "";
  export let source = ModuleGroupSource.UNKNOWN;
</script>

<div class="rounded {borderColor ? `${borderColor} p-3` : borderColor}">
  <span class="text-l font-semibold break-words hyphens-manual"
    >{@html title}</span>
  <ModuleChipCollection {modules} {userDataVal} {source} />
</div>
