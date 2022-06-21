<script>
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import Card from "../components/home/Card.svelte";
  import LaniwIcon from "../components/icons/LaniwIcon.svelte";

  currPage.set(Page.HOME);

  class Link {
    constructor(href, text) {
      this.href = href;
      this.text = text;
    }
  }

  const fhnwLinks = [new Link("fhnw/modulplanner", "Modulplanner")];
</script>

<div class="container mx-auto px-1 md:px-20 lg:px-40">
  <div class="w-96 mx-auto">
    <LaniwIcon />
  </div>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
    <Card
      title="FHNW"
      desc="Any projects in connection to the FHNW can be found in this card."
      links={fhnwLinks} />
  </div>
</div>
