"use strics";

let credits = 23580;

let pricePerDroid = 3000;

let totalPrice;

let input = prompt("Сколько дроидов вы хотите купить ?");

if (input === null) {
  alert("Отменено пользователем!");
} else {
  let toNumber = Number(input);
  totalPrice = toNumber * pricePerDroid;
  if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
  } else {
    let balance = credits - totalPrice;
    alert(
      `Вы купили ${toNumber} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}
