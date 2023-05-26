// Функция для генерации случайного числа в интервале [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleClick() {
  let numbers = [];
  

  // Заполняем массив случайными числами из интервала [-15, 15]
  for (let i = 0; i < 15; i++) {
    let num = randomInt(-15, 15);
    numbers.push(num);
  }

  let numbersElement = document.getElementById("numbers");
  numbersElement.textContent = "Сформированный массив: " + numbers.join(", ");

  let new_numbers = numbers;
  // Заменяем отрицательные числа на их квадраты
  for (let i = 0; i < new_numbers.length; i++) {
    if (new_numbers[i] < 0) {
      new_numbers[i] = Math.pow(new_numbers[i], 2);
    }
  }

  let new_numbersElement = document.getElementById("new_numbers");
  new_numbersElement.textContent = "Сформированный массив: " + new_numbers.join(", ");

}

let button = document.getElementById("generateButton");
button.addEventListener("click", handleClick);
