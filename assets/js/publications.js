document.querySelectorAll("[data-copy-bibtex]").forEach((button) => {
  const citation = button.closest(".publication__citation");
  const code = citation.querySelector("code");
  const status = citation.querySelector(".publication__copy-status");

  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = "Copied.";
    } catch {
      status.textContent = "Select and copy the citation manually.";
    }
  });
});
