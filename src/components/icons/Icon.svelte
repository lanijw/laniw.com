<script>
  import {onMount} from "svelte";

  export let icon;
  export let filled = false;
  let className;
  export {className as class};

  let Icon;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  async function updateIcon(icon) {
    Icon = (await import(/* @vite-ignore */`./${icon}Icon${filled ? "Filled" : ""}.svelte`)).default;
  }

  $: if (mounted) updateIcon(icon);
</script>

<svelte:component this={Icon} class={className} />

{#if !Icon}
  {icon}
{/if}
