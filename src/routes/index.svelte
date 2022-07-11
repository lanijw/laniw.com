<script>
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import Card from "../components/home/Card.svelte";
  import LaniwIcon from "../components/icons/LaniwIcon.svelte";

  currPage.set(Page.HOME);

  class Link {
    constructor(href, text, external = false) {
      this.href = href;
      this.text = text;
      this.external = external;
    }
  }

  const fhnwLinks = [new Link("fhnw/modulplanner", "Modulplanner")];
  const cvLinks = [
    new Link("cv?lang=en", "English"),
    new Link("cv?lang=de", "Deutsch")
  ];
  const githubLinks = [
    new Link("https://github.com/lanijw", "github.com/lanijw", true)
  ];
</script>

<div class="container mx-auto p-3 md:px-20 lg:px-40">
  <div class="w-full lg:w-96 mx-auto">
    <LaniwIcon />
  </div>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
    <div class="order-2 lg:order-1">
      <Card
        title="FHNW"
        desc="Any projects in connection to the FHNW can be found in this card."
        links={fhnwLinks} />
    </div>
    <div class="order-1 lg:order-2">
      <Card
        title="CV"
        desc="To share my CV more easily and to have one source of truth I created a page for my CV in English and German."
        links={cvLinks} />
    </div>
    <div class="order-3">
      <Card
        title="GitHub"
        desc="The repository for this website and possible future projects can be found on my GitHub."
        links={githubLinks} />
    </div>
  </div>
</div>
