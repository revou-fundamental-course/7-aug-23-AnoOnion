document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-container");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);

      if (isNaN(base) || isNaN(height)) {
          resultDiv.textContent = "Tolong masukan alas dan tinggi yang benar.";
          return;
      }

      const area = 0.5 * base * height;
      const perimeter = base + 2 * Math.sqrt(Math.pow(base / 2, 2) + Math.pow(height, 2));

      resultDiv.innerHTML = `
          <p>Luas Segitiga: ${area.toFixed(2)}</p>
          <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
      `;
  });
});
