<script>
  import {createEventDispatcher} from "svelte";

  export let id;
  let className;
  export {className as class};

  const dispatch = createEventDispatcher();

  function dispatchTriggerClick() {
    dispatch("triggerClick", {});
  }
</script>

<label
  for={id}
  class="cursor-pointer {className}"
  on:click={dispatchTriggerClick}>
  <slot />
</label>
