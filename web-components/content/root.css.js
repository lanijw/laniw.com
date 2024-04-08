const css = `
<style>

.main-container {
  width: clamp(var(--min-width), 50%, 64rem);
  margin: 4rem auto 0;
}

.logo-container {
  width: var(--min-width);
  margin: 0 auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
  gap: 1rem;
}
</style>
`;

export default css;
