<script>
  export let label;
</script>

<div class="d-form-control">
  <label class="d-label cursor-pointer place-content-start">
    <span class="d-label-text w-32">{label}</span>
    <slot />
  </label>
</div>
