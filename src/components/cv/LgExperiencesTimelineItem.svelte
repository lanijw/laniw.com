<script>
  import ModalTrigger from "../ModalTrigger.svelte";
  import ExperienceLabel from "./ExperienceLabel.svelte";

  export let leadSpan;
  export let span;
  export let followSpan;
  export let experience;
  export let modalTriggerId;
</script>

<div class="col-span-{leadSpan}" />
<ModalTrigger id={modalTriggerId} class="col-span-{span} rounded-lg shadow-lg py-2 px-3 cursor-pointer">
  <ExperienceLabel {experience}/>
</ModalTrigger>
<div class="col-span-{followSpan}" />