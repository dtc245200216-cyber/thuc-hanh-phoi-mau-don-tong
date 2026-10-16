// Bản 1: tông xanh CodeGym theo yêu cầu đề bài.
const palettes = {
  blue: ["#00ADEE", "#00B2EF", "#00BFF2", "#8DD7F7", "#C6E9FA"],
  // Bản 2: tông tím đơn sắc, đáp ứng bước 8.
  purple: ["#7C3AED", "#8B5CF6", "#A78BFA", "#DDD6FE", "#EDE9FE"]
};
const body = document.body;
const button = document.getElementById("themeButton");
const palette = document.getElementById("palette");
function renderPalette() {
  palette.innerHTML = "";
  palettes[body.dataset.theme].forEach((hex, index) => {
    const swatch = document.createElement("div");
    swatch.className = "swatch" + (index < 2 ? " light-text" : "");
    swatch.style.backgroundColor = hex;
    swatch.textContent = hex;
    palette.appendChild(swatch);
  });
  button.textContent = body.dataset.theme === "blue" ? "Chuyển sang tông tím" : "Chuyển sang tông xanh";
}
button.addEventListener("click", () => {
  body.dataset.theme = body.dataset.theme === "blue" ? "purple" : "blue";
  renderPalette();
});
renderPalette();
