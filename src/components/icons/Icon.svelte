<script>
  import {onMount} from "svelte";

  export let icon;
  export let filled = false;
  let className;
  export {className as class};

  const IconMap = new Map([
    ["clipboard", "Clipboard"],
    ["clipboard-check", "ClipboardCheck"],
    ["info", "Info"],
    ["share", "Share"]
  ]);

  let Icon;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  async function updateIcon(icon) {
    const iconFileName = "./".concat(IconMap.get(icon)).concat("Icon.svelte");
    const filledIconFileName = "./"
      .concat(IconMap.get(icon))
      .concat("IconFilled.svelte");
    Icon = (await import(filled ? filledIconFileName : iconFileName)).default;
  }

  $: if (mounted) updateIcon(icon);
</script>

<svelte:component this={Icon} class={className} />

{#if !Icon}
  {icon}
{/if}
