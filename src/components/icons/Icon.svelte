<script>
  import {onMount} from "svelte";

  export let icon;
  let className;
  export {className as class};

  const IconMap = new Map([["info", "./InfoIcon.svelte"]]);

  let Component;

  onMount(async () => {
    console.log(IconMap.get(icon));
    Component = (await import(IconMap.get(icon))).default;
  });
</script>

<svelte:component this={Component} class={className} />

{#if !Component}
  {icon}
{/if}
