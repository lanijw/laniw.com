<script>
	export let borderColor = "";
</script>

<div class="rounded {borderColor ? `${borderColor} p-3` : borderColor} m-3">
	<slot/>
</div>