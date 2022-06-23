<script>
  export let label;

  let htmlFor;
  export {htmlFor as for};
</script>

<div class="d-form-control">
  <label class="d-label cursor-pointer place-content-start" for={htmlFor}>
    <span class="d-label-text w-32">{label}</span>
    <slot />
  </label>
</div>
