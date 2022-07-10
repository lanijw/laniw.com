<script>
  import {onMount} from "svelte";

  export let icon;
  let className;
  export {className as class};

  const IconMap = new Map([
    ["info", "./InfoIcon.svelte"],
    ["clipboard", "./ClipboardIcon.svelte"],
    ["clipboard-check", "./ClipboardCheckIcon.svelte"]
  ]);

  let Component;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  async function updateIcon(icon) {
    Component = (await import(IconMap.get(icon))).default;
  }

  $: if (mounted) updateIcon(icon);
</script>

<svelte:component this={Component} class={className} />

{#if !Component}
  {icon}
{/if}
