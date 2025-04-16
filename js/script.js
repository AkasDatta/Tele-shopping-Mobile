// Swiper js 
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});



// Delivery date function 
function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

function getNextMonday(date) {
    const nextMonday = new Date(date);
    nextMonday.setDate(date.getDate() + ((8 - date.getDay()) % 7));
    return nextMonday;
}

const today = new Date();
const twoDaysLater = new Date(today);
twoDaysLater.setDate(today.getDate() + 2);

let deliveryStartDate = new Date(today);
deliveryStartDate.setDate(today.getDate() + 5);

let deliveryEndDate = new Date(today);
deliveryEndDate.setDate(today.getDate() + 7);

// Adjust delivery dates if they fall on a weekend
if (deliveryStartDate.getDay() === 6 || deliveryStartDate.getDay() === 0) {
    deliveryStartDate = getNextMonday(deliveryStartDate);
}
if (deliveryEndDate.getDay() === 6 || deliveryEndDate.getDay() === 0) {
    deliveryEndDate = getNextMonday(deliveryEndDate);
}

document.getElementById('currentDate').innerText = formatDate(today);
document.getElementById('twoDaysLater').innerText = formatDate(twoDaysLater);
document.getElementById('deliveryDate').innerText = `${formatDate(deliveryStartDate)} - ${formatDate(deliveryEndDate)}`;