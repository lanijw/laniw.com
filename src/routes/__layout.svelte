<script>
	import "../app.css";
	import {APPLICATION_NAME} from "../constants";
	import NavBar from "../components/NavBar.svelte";
	import {onDestroy} from "svelte";
	import {currPage} from "../stores";
	import {Page} from "../constants.js";

	let currPageVal;
	const unsubCurrPage = currPage.subscribe(v => currPageVal = v);
	onDestroy(() => unsubCurrPage())
</script>

<svelte:head>
	<title>{APPLICATION_NAME}</title>
</svelte:head>

{#if currPageVal !== Page.HOME}
	<NavBar {currPageVal}/>
{/if}

<div class="pt-20">
	<slot/>
</div>
