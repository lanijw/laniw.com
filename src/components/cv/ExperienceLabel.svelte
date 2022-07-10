<script>
  import {ExperienceType, ExperienceTypeMap} from "./data";
  import Icon from "../icons/Icon.svelte";

  let e;
  export {e as experience};
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
    >{@html ExperienceTypeMap.get(e.type)}</span>
  <div class="relative left-5">
    {@html e.title}
    {#if e.org}
      <br /> {@html e.org}
    {/if}
    <Icon icon="info" filled class="h-5 w-5 inline" />
  </div>
</div>
