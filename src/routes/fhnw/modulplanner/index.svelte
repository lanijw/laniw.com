<script>
	import {
		ADDITIONAL_MODULES_TITLE,
		ADVANCED_MODULES_TITLE,
		BASE_GROUP_1_TITLE,
		BASE_GROUP_2_TITLE,
		BASE_GROUP_3_TITLE,
		BASE_GROUP_4_TITLE,
		BWL_TITLE,
		COMM_TITLE,
		ENGL_TITLE,
		GSW_TITLE,
		MAIN_MODULES_TITLE, Page,
		PROJECT_TITLE
	} from "../../../constants";
	import ModuleGroup from "../../../components/ModuleGroup.svelte";
	import {modules} from "../../../modules";
	import ModuleGroupContainer from "../../../components/ModuleGroupContainer.svelte";
	import ModuleChipCollection from "../../../components/ModuleChipCollection.svelte";
	import {currPage, userData} from "../../../stores.js";
	import {onDestroy} from "svelte";

	currPage.set(Page.MODULE_PLANNER);

	let userDataVal;
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())
</script>

<div class="container mx-auto mt-3">
	<div class="flex flex-row">
		<div class="basis-1/7">
			<ModuleGroup title={PROJECT_TITLE}
			             modules={modules.projects.modules}
			             {userDataVal}
			             borderColor="border-2 border-cyan-600"/>
		</div>
		<div class="basis-5/7">
			<ModuleGroupContainer borderColor="border-2 border-blue-700">
				<span class="text-l font-semibold">{MAIN_MODULES_TITLE}</span>
				<div class="flex flex-row">
					<div class="basis-4/5">
						<ModuleGroupContainer borderColor="border-2 border-blue-700">
							<span class="text-l font-semibold">{ADVANCED_MODULES_TITLE}</span>
							<div class="flex flex-row">
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.ict} {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.web} {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.dataSci} {userDataVal}/>
									</ModuleGroupContainer>
								</div>
								<div class="basis-1/4">
									<ModuleGroupContainer>
										<ModuleChipCollection modules={modules.mainModules.advancedModules.spatialComp} {userDataVal}/>
									</ModuleGroupContainer>
								</div>
							</div>
						</ModuleGroupContainer>
						<div class="flex flex-row">
							<div class="basis-1/4">
								<ModuleGroup title={BASE_GROUP_1_TITLE}
								             modules={modules.mainModules.baseModules.prog.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title={BASE_GROUP_2_TITLE}
								             modules={modules.mainModules.baseModules.swe.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title={BASE_GROUP_3_TITLE}
								             modules={modules.mainModules.baseModules.ict.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
							<div class="basis-1/4">
								<ModuleGroup title={BASE_GROUP_4_TITLE}
								             modules={modules.mainModules.baseModules.math.modules}
								             {userDataVal}
								             borderColor="border-2 border-blue-700"/>
							</div>
						</div>
					</div>
					<div class="basis-1/5">
						<ModuleGroup title={ADDITIONAL_MODULES_TITLE}
						             modules={modules.mainModules.additionalModules.modules}
						             {userDataVal}
						             borderColor="border-2 border-blue-700"/>
					</div>
				</div>
			</ModuleGroupContainer>
		</div>
		<div class="basis-1/7 grid content-between">
			<ModuleGroup title={BWL_TITLE}
			             modules={modules.bwl.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title={COMM_TITLE}
			             modules={modules.comm.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title={ENGL_TITLE}
			             modules={modules.engl.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
			<ModuleGroup title={GSW_TITLE}
			             modules={modules.gsw.modules}
			             {userDataVal}
			             borderColor="border-2 border-fuchsia-600"/>
		</div>
	</div>
</div>