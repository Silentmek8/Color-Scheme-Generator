document
  .getElementById("fetchBtn")
  .addEventListener("click", async function () {
    const hex = document.getElementById("seedColor").value.replace("#", "");
    const mode = document.getElementById("modeSelect").value;
    const container = document.getElementById("colorsContainer");

    const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`;

    const response = await fetch(url);
    const data = await response.json();

    container.innerHTML = "";
    data.colors.forEach(function (color) {
      const hex = color.hex.value;
      const div = document.createElement("div");
      const label = document.createElement("span");

      div.style.backgroundColor = hex;
      label.textContent = hex;
      div.appendChild(label);
      container.appendChild(div);
    });
  });

document.getElementById("fetchBtn").click();
