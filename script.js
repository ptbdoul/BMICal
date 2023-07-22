document.getElementById("calculate-btn").addEventListener("click", function() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "Please enter both weight and height.";
    return;
  }

  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  var category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("result").innerHTML = "Your BMI: " + bmi + " - " + category;
});
