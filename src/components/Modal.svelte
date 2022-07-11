<script>
  import ModalTrigger from "./ModalTrigger.svelte";
  import {createEventDispatcher} from "svelte";

  export let id;

  const dispatch = createEventDispatcher();

  function dispatchTriggerClick() {
    dispatch("triggerClick", {});
  }
</script>

<ModalTrigger {id} on:triggerClick={dispatchTriggerClick}>
  <slot name="trigger" />
</ModalTrigger>

<input type="checkbox" {id} class="d-modal-toggle" />
<label for={id} class="d-modal d-modal-bottom sm:d-modal-middle transition-all">
  <label for="" class="d-modal-box relative">
    <label for={id} class="d-btn d-btn-sm d-btn-circle absolute right-2 top-2"
      >✕</label>
    <slot name="content" />
  </label>
</label>
