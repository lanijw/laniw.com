<script>
  import ModalTrigger from "../ModalTrigger.svelte";
  import ExperienceLabel from "./ExperienceLabel.svelte";
  import {onDestroy} from "svelte";
  import {infoOpened} from "./stores";

  export let leadSpan = "";
  export let span = "";
  export let followSpan = "";
  export let experience;
  export let modalTriggerId;
  export let lang;

  let infoOpenedVal;
  const unsubInfoOpened = infoOpened.subscribe(v => (infoOpenedVal = v));
  onDestroy(() => unsubInfoOpened());
</script>

<div class={leadSpan} />
<ModalTrigger
  id={modalTriggerId}
  class="{span} rounded-lg shadow-lg py-2 px-3 cursor-pointer"
  on:triggerClick={() => infoOpened.set(true)}>
  <ExperienceLabel {experience} {lang} />
</ModalTrigger>
<div class={followSpan} />
