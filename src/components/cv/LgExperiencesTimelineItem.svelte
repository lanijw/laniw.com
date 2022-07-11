<script>
  import ModalTrigger from "../ModalTrigger.svelte";
  import ExperienceLabel from "./ExperienceLabel.svelte";

  export let leadSpan;
  export let span;
  export let followSpan;
  export let experience;
  export let modalTriggerId;
  export let lang;
</script>

<div class={leadSpan} />
<ModalTrigger
  id={modalTriggerId}
  class="{span} rounded-lg shadow-lg py-2 px-3 cursor-pointer">
  <ExperienceLabel {experience} {lang} />
</ModalTrigger>
<div class={followSpan} />
