const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0 || isNaN(height)) {
    return (results.innerHTML = `Enter valid height`);
  } else if (weight < 0 || isNaN(weight)) {
    return (results.innerHTML = `Enter valid weight`);
  } else {
    const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));
    results.innerHTML = `<span>${bmi}</span>`;

    function addMsg(value) {
      const msg = document.createElement("p");
      msg.appendChild(
        document.createTextNode(`According to your BMI, You are ${value}`),
      );
      results.appendChild(msg);
    }

    if (bmi < 18.6) {
      addMsg("Underweight");
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      addMsg("Normal");
    } else if (bmi > 24.9) {
      addMsg("Overweight");
    }
  }
});
