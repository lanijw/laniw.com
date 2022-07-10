<script>
  import {scale} from "svelte/transition";
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import {getLaniwAge, getUrlParams} from "../util.js";
  import {onMount} from "svelte";
  import ProgressBar from "../components/ProgressBar.svelte";
  import Icon from "../components/icons/Icon.svelte";

  currPage.set(Page.CV);

  let lang = "en";
  let age = "Loading...";
  onMount(() => {
    const paramLang = getUrlParams().get("lang");
    lang = paramLang ? paramLang : "en";
    age = getLaniwAge();
  });

  let extraContentShown = true;

  function handleExtrasShown() {
    extraContentShown = true;
  }

  const languageSkills = [
    {
      skill: "English",
      completion: 1
    },
    {
      skill: "German",
      completion: 1
    },
    {
      skill: "French",
      completion: 0.8
    }
  ];

  const mainCodingSkills = [
    {
      skill: "Java",
      completion: 1
    },
    {
      skill: "HTML",
      completion: 1
    },
    {
      skill: "CSS",
      completion: 0.8
    },
    {
      skill: "JavaScript",
      completion: 1
    },
    {
      skill: "TypeScript",
      completion: 0.7
    },
    {
      skill: "Svelte/SvelteKit",
      completion: 0.9
    }
  ];

  const secondaryCodingSkills = [
    {
      skill: "LaTeX",
      completion: 1
    },
    {
      skill: "Python",
      completion: 0.8
    },
    {
      skill: "PHP",
      completion: 0.7
    },
    {
      skill: "MySQL",
      completion: .85
    }
  ];

  const otherSkills = [
    {
      skill: "Web Development",
      completion: 0.8
    },
    {
      skill: "Project Management",
      completion: 0.6
    },
    {
      skill: "Event Planning",
      completion: 0.7
    },
    {
      skill: "Tutoring",
      completion: 0.8
    }
  ];

  const allSkills = [
    {
      skills: languageSkills,
      color: "bg-sky-600"
    },
    {
      skills: mainCodingSkills,
      color: "bg-amber-500"
    },
    {
      skills: secondaryCodingSkills,
      color: "bg-red-500"
    },
    {
      skills: otherSkills,
      color: "bg-teal-500"
    }
  ];

  function copyEmailToClipboard() {
    navigator.clipboard
      .writeText("lani.julian.wagner+5r6Mq.laniw.com@gmail.com")
      .then(
        function () {
          /* clipboard successfully set */
        },
        function () {
          /* clipboard write failed */
        }
      );
  }
</script>

<div class="container mx-auto">
  {#if lang === "de"}
    <h1>Lebenslauf</h1>
  {:else}
    <div class="h-screen pt-24">
      <div class="flex gap-4 flex-col lg:flex-row lg:items-center">
        <div class="flex justify-center">
          <img
            src="/img/laniw.png"
            alt="Lani Wagner"
            class="w-5/6 lg:w-auto h-auto object-cover" />
        </div>
        <p
          class="text-4xl lg:text-7xl text-center lg:text-left mx-4 lg:mx-auto">
          Hi, I'm <b>Lani</b> (<span
            data-tooltip="{age} years old"
            class="after:text-2xl">{age}<span class="lg:hidden">y</span></span
          >), an up-and-coming software engineer based in Switzerland.
        </p>
      </div>

      <div class="d-collapse w-full mt-10">
        <input
          type="checkbox"
          class="peer"
          bind:checked={extraContentShown}
          disabled={extraContentShown}
          class:hidden={extraContentShown} />
        {#if !extraContentShown}
          <div class="d-collapse-title">
            <div class="w-full flex justify-center" transition:scale>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        {/if}
        <div class="d-collapse-content">
          <div>
            <h2 class="mb-4">Skills</h2>
            <div class="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {#each allSkills as skills}
                {#each skills.skills as s}
                  <div>
                    <p class="text-lg">{s.skill}</p>
                    <ProgressBar
                      completion={s.completion}
                      wrapperClass="h-3"
                      class={skills.color} />
                  </div>
                {/each}
              {/each}
            </div>

            <h2 class="mb-4 mt-8">Education and Experience</h2>
            <div class="flex flex-wrap gap-3 lg:hidden">
              <div class="w-full">
                Jan 2022 - Now
                <span
                  class="rounded-full bg-warning text-warning-content px-1 text-xs"
                  >Extracurricular</span>
                <div class="relative left-5">
                  Student's Union Vice President
                  <Icon icon="info" class="h-5 w-5 inline" />
                </div>
              </div>
              <div class="w-full">
                Sep 2021 - Now
                <span
                  class="rounded-full bg-info text-info-content px-1 text-xs"
                  >Work</span>
                <div class="relative left-5">
                  makerstudio <br />
                  3D-Printer Lab Manager
                  <Icon icon="info" class="h-5 w-5 inline" />
                </div>
              </div>
              <div class="w-full">
                <div class="inline-block relative">
                  Sep 2021 - Now
                  <span
                    class="rounded-full bg-success text-success-content px-1 text-xs"
                    >Education</span>
                  <div class="relative left-5">
                    BSc Computer Sciences @ FHNW
                    <Icon icon="info" class="h-5 w-5 inline" />
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div class="inline-block relative">
                  Aug 2017 - May 2021
                  <span
                    class="rounded-full bg-info text-info-content px-1 text-xs"
                    >Work</span>
                  <div class="relative left-5">
                    Google Switzerland GmbH, Zürich <br />
                    Software Engineering Apprenticeship
                    <Icon icon="info" class="h-5 w-5 inline" />
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div class="inline-block relative">
                  Aug 2017 - May 2021
                  <span
                    class="rounded-full bg-success text-success-content px-1 text-xs"
                    >Education</span>
                  <div class="relative left-5">
                    Berufsmaturitätsschule Zürich
                    <Icon icon="info" class="h-5 w-5 inline" />
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div class="inline-block relative">
                  Aug 2017 - Jan 2021
                  <span
                    class="rounded-full bg-success text-success-content px-1 text-xs"
                    >Education</span>
                  <div class="relative left-5">
                    Technische Berufsschule Zürich
                    <Icon icon="info" class="h-5 w-5 inline" />
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden lg:flex flex-wrap gap-1">
              <div class="d-divider w-full">Now</div>

              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >BSc @ FHNW</div>
              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >makerstudio @ FHNW</div>
              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >students.fhnw</div>

              <div class="d-divider w-full">2021</div>

              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >Apprenticeship @ Google</div>
              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >Technical Trade School @ TBZ</div>
              <div class="rounded-lg shadow-lg p-4 h-auto flex-basis-1"
                >General Education @ BMS</div>

              <div class="d-divider w-full">2017</div>
            </div>

            <h2 class="mb-4 mt-8">Contact Me</h2>

            Send me a message:
            <a
              href="mailto:lani.julian.wagner+5r6Mq.laniw.com@gmail.com"
              class="d-link d-link-primary"
              >lani[dot]julian.wagner+5r6Mq.laniw.com[at]gmail.com</a>
            <div class="inline cursor-pointer" on:click={copyEmailToClipboard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline transition-all duration-200 hover:scale-125 active:scale-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
