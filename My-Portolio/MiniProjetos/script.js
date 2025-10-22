function carregarProjeto(url) {
  const iframe = document.getElementById("projeto-preview");
  const fallback = document.querySelector(".preview-fallback");

  if (url) {
    iframe.src = url;

    if (fallback) {
      fallback.style.display = "none";
    }
  }
}
