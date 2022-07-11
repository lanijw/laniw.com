<script>
  import {
    EnglishExperienceTypeMap,
    ExperienceType,
    GermanExperienceTypeMap
  } from "./data";
  import Icon from "../icons/Icon.svelte";
  import {infoOpened} from "./stores";
  import {onDestroy} from "svelte";
  import {scale} from "svelte/transition";

  let e;
  export {e as experience};
  export let lang;

  let infoOpenedVal;
  const unsubInfoOpened = infoOpened.subscribe(v => (infoOpenedVal = v));
  onDestroy(() => unsubInfoOpened());

  let chip;
  $: chip =
    lang === "en"
      ? EnglishExperienceTypeMap.get(e.type)
      : GermanExperienceTypeMap.get(e.type);
</script>

<div class="w-full">
  {@html e.from} - {@html e.to}
  <span
    class="rounded-full px-1 text-xs"
    class:bg-info={e.type === ExperienceType.WORK}
    class:text-info-content={e.type === ExperienceType.WORK}
    class:bg-success={e.type === ExperienceType.EDUCATION}
    class:text-success-content={e.type === ExperienceType.EDUCATION}
    class:bg-warning={e.type === ExperienceType.EXTRACURRICULAR}
    class:text-warning-content={e.type === ExperienceType.EXTRACURRICULAR}
    >{@html chip}</span>
  <div class="relative ml-5">
    {@html e.title}
    {#if e.org}
      <br /> {@html e.org}
    {/if}
    <Icon icon="Info" filled class="h-5 w-5 inline" />
    {#if !infoOpenedVal}
      <Icon
        icon="CursorClick"
        filled
        class="h-5 w-5 inline motion-safe:animate-pulse animate-pulse" />
    {/if}
  </div>
</div>
