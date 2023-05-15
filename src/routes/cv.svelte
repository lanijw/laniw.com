<script>
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import {getUrlParams} from "../util.js";
  import {onDestroy, onMount} from "svelte";
  import ProgressBar from "../components/ProgressBar.svelte";
  import Icon from "../components/icons/Icon.svelte";
  import {
    englishContactTitle,
    englishCopyInstruction,
    englishExperiences,
    englishExperienceTitle,
    englishHeroText,
    englishSkills,
    englishSkillsTitle,
    germanContactTitle,
    germanCopyInstruction,
    germanExperiences,
    germanExperienceTitle,
    germanHeroText,
    germanSkills,
    germanSkillsTitle,
    SkillType
  } from "../components/cv/data";
  import Modal from "../components/Modal.svelte";
  import LgExperiencesTimelineItem from "../components/cv/LgExperiencesTimelineItem.svelte";
  import ModalTrigger from "../components/ModalTrigger.svelte";
  import ExperienceLabel from "../components/cv/ExperienceLabel.svelte";
  import {infoOpened} from "../components/cv/stores";

  currPage.set(Page.CV);

  let lang = "en",
    heroText = englishHeroText,
    skillsTitle = englishSkillsTitle,
    allSkills = englishSkills,
    experienceTitle = englishExperienceTitle,
    experiences = englishExperiences,
    contactTitle = englishContactTitle,
    copyInstruction = englishCopyInstruction;
  onMount(() => {
    const paramLang = getUrlParams().get("lang");
    lang = paramLang ? paramLang : "en";
    if (lang === "de") {
      heroText = germanHeroText;
      skillsTitle = germanSkillsTitle;
      allSkills = germanSkills;
      experienceTitle = germanExperienceTitle;
      experiences = germanExperiences;
      contactTitle = germanContactTitle;
      copyInstruction = germanCopyInstruction;
    }
  });

  let clipboardIcon = "Clipboard";
  function copyEmailToClipboard() {
    navigator.clipboard
      .writeText("lani.julian.wagner+5r6Mq.laniw.com@gmail.com")
      .then(
        function () {
          clipboardIcon = "ClipboardCheck";
          setTimeout(() => (clipboardIcon = "clipboard"), 1000);
        },
        function () {
          /* clipboard write failed */
        }
      );
  }

  let infoOpenedVal;
  const unsubInfoOpened = infoOpened.subscribe(v => (infoOpenedVal = v));
  onDestroy(() => unsubInfoOpened());

  function mapCategoryToProgressColor(skillType) {
    const SkillTypeMap = new Map([
      [SkillType.LANGUAGE, "bg-sky-600"],
      [SkillType.DEV, "bg-amber-500"],
      [SkillType.OTHER, "bg-teal-500"]
    ]);
    return SkillTypeMap.get(skillType);
  }
</script>

<div class="container mx-auto my-24 lg:mb-48">
  <div class="mx-2">
    <div class="flex gap-4 flex-col lg:flex-row lg:items-center mb-20">
      <div class="flex justify-center">
        <img
          src="/img/laniw.png"
          alt="Lani Wagner"
          class="w-5/6 lg:w-auto h-auto object-cover" />
      </div>
      <p class="text-4xl lg:text-7xl text-center lg:text-left mx-4 lg:mx-auto">
        {@html heroText}
      </p>
    </div>

    <h2 class="mb-4 lg:text-center">{@html skillsTitle}</h2>
    <div class="grid grid-cols-12 lg:grid-cols-12 gap-4">
      {#each allSkills as skills}
        {#each skills.skills as s}
          <div
            class:col-span-4={skills.category === SkillType.LANGUAGE || skills.category === SkillType.DEV}
            class:col-span-6={skills.category === SkillType.OTHER}
            class:lg:col-span-2={skills.category === SkillType.LANGUAGE || skills.category === SkillType.DEV}
            class:lg:col-span-3={skills.category === SkillType.OTHER}
            data-tooltip={s.skill}>
            <div
              class="text-lg w-full h-full -mb-1.5 overflow-hidden whitespace-nowrap text-ellipsis">
              {@html s.skill}
            </div>
            <ProgressBar
              completion={s.completion}
              wrapperClass="h-3"
              class={mapCategoryToProgressColor(skills.category)} />
          </div>
        {/each}
      {/each}
    </div>

    <h2 class="mb-4 mt-20 lg:text-center">{@html experienceTitle}</h2>
    <div class="grid gap-3 lg:hidden">
      {#each experiences as e, i}
        <ModalTrigger
          id={`experience-${i}`}
          on:triggerClick={() => infoOpened.set(true)}>
          <ExperienceLabel experience={e} {lang} />
        </ModalTrigger>
      {/each}
    </div>
    <div class="hidden lg:grid grid-cols-8">
      <div class="text-center col-span-2"
        ><span
          class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
          >2017</span
        ></div>
      <div class="text-center col-span-2"
        ><span
          class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
          >2018-2020</span
        ></div>
      <div class="text-center col-span-2"
        ><span
          class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
          >2021</span
        ></div>
      <div class="text-center col-span-2"
        ><span
          class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
          >2022</span
        ></div>
      <div class="col-span-8 grid grid-cols-8 gap-2">
        <LgExperiencesTimelineItem
          leadSpan="col-span-6"
          span="col-span-1"
          followSpan="col-span-1"
          experience={experiences[0]}
          modalTriggerId="experience-0"
          {lang} />
        <LgExperiencesTimelineItem
          leadSpan="col-span-1"
          span="col-span-4"
          followSpan="hidden"
          experience={experiences[3]}
          modalTriggerId="experience-3"
          {lang} />
        <LgExperiencesTimelineItem
          leadSpan="hidden"
          span="col-span-2"
          followSpan="col-span-1"
          experience={experiences[1]}
          modalTriggerId="experience-1"
          {lang} />
        <LgExperiencesTimelineItem
          leadSpan="col-span-1"
          span="col-span-4"
          followSpan="hidden"
          experience={experiences[4]}
          modalTriggerId="experience-4"
          {lang} />
        <LgExperiencesTimelineItem
          leadSpan="hidden"
          span="col-span-2"
          followSpan="col-span-1"
          experience={experiences[2]}
          modalTriggerId="experience-2"
          {lang} />
      </div>
    </div>

    <h2 class="text-4xl mb-4 mt-20 text-center">{@html contactTitle}</h2>
    <div class="text-center">
      <a
        href="mailto:lani.julian.wagner+5r6Mq.laniw.com@gmail.com"
        class="d-link d-link-primary break-all"
        >lani.julian.wagner+5r6Mq.laniw.com[at]gmail.com</a>
      <div
        class="w-fit mx-auto cursor-pointer flex items-center justify-center mt-4 after:hover:mb-12"
        on:click={copyEmailToClipboard}>
        <span class="mr-2">{@html copyInstruction}</span>
        <Icon
          icon={clipboardIcon}
          class="h-12 w-12 transition-all duration-200 lg:hover:scale-125 active:scale-75" />
      </div>
    </div>
    <!-- Modals with empty triggers to trigger from mobile and desktop view with separate labels. -->
    {#each experiences as e, i}
      <Modal id={`experience-${i}`}>
        <svelte:fragment slot="trigger" />
        <svelte:fragment slot="content">
          <h3 class="mb-4">{@html e.title}</h3>
          <p>{@html e.desc}</p>
        </svelte:fragment>
      </Modal>
    {/each}
  </div>
</div>
