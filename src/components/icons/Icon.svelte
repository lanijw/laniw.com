<script>
  import {onMount} from "svelte";

  export let icon;
  export let filled = false;
  let className;
  export {className as class};

  console.log(filled)

  const IconMap = new Map([
    ["info", "./InfoIcon"],
    ["clipboard", "./ClipboardIcon"],
    ["clipboard-check", "./ClipboardCheckIcon"]
  ]);

  let Component;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  async function updateIcon(icon) {
    Component = (await import(IconMap.get(icon).concat(filled ? "Filled" : "").concat(".svelte"))).default;
  }

  $: if (mounted) updateIcon(icon);
</script>

<svelte:component this={Component} class={className} />

{#if !Component}
  {icon}
{/if}
