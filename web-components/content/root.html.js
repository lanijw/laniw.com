const template = `
<div class="main-container">
  <div class="logo-container">
    <c-laniw-icon></c-laniw-icon>
  </div>
  
  <div class="card-grid">
    <c-card>
      <h3 slot="title">CV</h3>
      <p slot="text">To share my CV more easily and to have one source of truth I created a page for my CV in English and German.</p>
      <ul slot="action">
        <li><a href="/cv?lang=en">English</a></li>
        <li><a href="/cv?lang=de">German</a></li>
      </ul>
    </c-card>
    <c-card>
      <h3 slot="title">Sandbox</h3>
      <p slot="text">I share some of my less important side projects here.</p>
      <ul slot="action">
        <li><a href="/sandbox/hyperion">Hyperion playing instructions and summary sheets</a></li>
        <li><a href="/sandbox/rummy">Rummy 500 summary sheets</a></li>
        <li><a href="/sandbox/watten">"Ladinisch Watten" blind help</a></li>
      </ul>
    </c-card>
    <c-card>
      <h3 slot="title">GitHub</h3>
      <p slot="text">The repository for this website and possible future projects can be found on my GitHub.</p>
      <ul slot="action">
        <li><a href="https://github.com/lanijw">github.com/lanijw</a></li>
      </ul>
    </c-card>
  </div>
</div>
`;

export default template;
