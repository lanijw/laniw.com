<script>
  export let title;
  export let desc;
  export let links;
</script>

<div class="d-card w-full bg-base-100 shadow-lg hover:shadow-xl rounded-lg">
  <div class="d-card-body">
    <h2 class="d-card-title">{title}</h2>
    <p>{desc}</p>
    <div class="d-card-actions">
      <ul class="list-none">
        {#each links as link}
          <li>
            <a href={link.href} class="d-link d-link-primary">{link.text}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
