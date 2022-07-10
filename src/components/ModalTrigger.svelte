<script>
  export let id;
  let className;
  export {className as class};
</script>

<label for={id} class="cursor-pointer {className}">
  <slot />
</label>
