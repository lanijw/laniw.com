<script>
	import FhnwIconNoText from "./icons/FhnwIconNoText.svelte";
	import DownloadIcon from "./icons/DownloadIcon.svelte";
	import {userData} from "../stores";
	import {onDestroy} from "svelte";
	import {downloadableFileName} from "../util";
	import UploadIcon from "./icons/UploadIcon.svelte";
	import {NAVBAR_PLANING_LABEL, NAVBAR_STATISTICS_LABEL} from "../constants";

	export let currPageVal;
	// TODO(laniw): Implement use of this.

	let userDataDownload;
	const unsubUserData = userData.subscribe(v => userDataDownload =
			"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(v)))
	onDestroy(() => unsubUserData())

	let files = [];

	function downloadFileName() {
		return downloadableFileName("", "Studenthub-Benutzerdaten", new Date())
	}

	function uploadFile() {
		if (!files.length) return;

		let fileContent = "";
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			files = [];
			fileContent = reader.result;
			userData.update(_ => JSON.parse(fileContent))
		}, false)
		reader.readAsText(files[0])
	}
</script>

<div class="d-navbar bg-base-200">
	<div class="flex-none">
		<a href="/">
			<button class="d-btn d-btn-square d-btn-ghost">
				<FhnwIconNoText/>
			</button>
		</a>
	</div>
	<div class="flex-none">
		<span class="ml-2 text-xl font-semibold">Studenthub</span>
	</div>
	<div class="flex-1 ml-3">
		<ul class="d-menu d-menu-horizontal p-0">
			<li class="rounded-lg"><a href="stats">{@html NAVBAR_STATISTICS_LABEL}</a></li>
			<li class="rounded-lg"><a href="plan">{@html NAVBAR_PLANING_LABEL}</a></li>
		</ul>
	</div>
	<div class="flex-none">
		<input type="file" accept=".json" bind:files>
		<button class="d-btn d-btn-square d-btn-ghost" on:click={uploadFile}>
			<UploadIcon/>
		</button>
		<a href={userDataDownload} download={downloadFileName()}>
			<button class="d-btn d-btn-square d-btn-ghost">
				<DownloadIcon/>
			</button>
		</a>
	</div>
</div>