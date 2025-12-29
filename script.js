function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("payment").value;
  const comment = document.getElementById("comment").value;

  const adminPhone = "998992205726"; // 🔴 ЗАМЕНИ НА СВОЙ НОМЕР (без +)

  const message = `
🛍 Новый заказ — LuxStyle

👤 Имя: ${name}
📞 Телефон: ${phone}
📍 Адрес: ${address}
💳 Оплата: ${payment}
📝 Комментарий: ${comment}
  `;

  const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
