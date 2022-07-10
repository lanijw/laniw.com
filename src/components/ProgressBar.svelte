<script>
  export let wrapperClass;
  let className;
  export {className as class};
  export let completion;
</script>

<div class={wrapperClass + ` rounded-full w-full bg-slate-300`}>
  <div
    class={className + ` rounded-full h-full`}
    style={`width: ${completion * 100}%;`} />
</div>
