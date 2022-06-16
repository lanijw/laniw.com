<script>
	import "../app.css";
	import {APPLICATION_NAME} from "../constants";
	import NavBar from "../components/NavBar.svelte";
	import {onDestroy} from "svelte";
	import {currPage} from "../stores";

	let currPageVal;
	const unsubCurrPage = currPage.subscribe(v => currPageVal = v);
	onDestroy(() => unsubCurrPage())
</script>

<svelte:head>
	<title>{APPLICATION_NAME}</title>
</svelte:head>

<NavBar {currPageVal}/>

<slot/>
