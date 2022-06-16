<script>
	import ModuleGroup from "../../../components/modulplanner/ModuleGroup.svelte";
	import {modules} from "../../../modules";
	import ModuleGroupContainer
		from "../../../components/modulplanner/ModuleGroupContainer.svelte";
	import ModuleChipCollection
		from "../../../components/modulplanner/ModuleChipCollection.svelte";
	import {currPage} from "../../../stores.js";
	import {onDestroy} from "svelte";
	import {Page} from "../../../constants";
	import {userData} from "../../../components/modulplanner/stores";

	currPage.set(Page.MODULE_PLANNER);

	let userDataVal;
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())
</script>

<div class="container mx-auto mt-3">
	<div class="flex flex-row">
		<div class="basis-1/7">
			<ModuleGroup title="Projekte"
			             modules={modules.projects.modules}
			             {userDataVal}
			             borderColor="border-2 border-cyan-600"/>
		</div>
		<div class="basis-5/7">
			<ModuleGroupContainer borderColor="border-2 border-blue-700">
				<span class="text-l font-semibold">Fachausbildung</span>
				<div class="flex flex-row">
					<div class="basis-4/5">
						<ModuleGroupContainer borderColor="border-2 border-blue-700">
							<span class="text-l font-semibold">Fachvertiefung</span>
							<div class="flex flex-row">
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.ict}
										                      {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.web}
										                      {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.dataSci}
										                      {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.spatialComp}
										                      {userDataVal}/>
									</ModuleGroupContainer>
								</div>
							</div>
						</ModuleGroupContainer>
						<div class="flex flex-row">
							<div class="basis-1/4">
								<ModuleGroup title="Programmierung"
								             modules={modules.mainModules.baseModules.prog.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title="Software Engineering"
								             modules={modules.mainModules.baseModules.swe.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title="ICT Systeme"
								             modules={modules.mainModules.baseModules.ict.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title="Mathematik"
								             modules={modules.mainModules.baseModules.math.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
						</div>
					</div>
					<div class="basis-1/5">
						<ModuleGroup title="Facherg&auml;nzung"
						             modules={modules.mainModules.additionalModules.modules}
						             {userDataVal}
						             borderColor="border-2 border-blue-700"/>
					</div>
				</div>
			</ModuleGroupContainer>
		</div>
		<div class="basis-1/7 grid content-between">
			<ModuleGroup title="Betriebswirtschaftslehre"
			             modules={modules.bwl.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title="Kommunikation"
			             modules={modules.comm.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title="Englisch"
			             modules={modules.engl.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title="GSW"
			             modules={modules.gsw.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
		</div>
	</div>
</div>