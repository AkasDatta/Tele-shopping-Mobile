const images = ["./img/image 1.png", "./img/image 1.png", "./img/image 1.png"];
const progressPercents = ["33.33%", "66.66%", "100%"];

const buttons = document.querySelectorAll('.dot-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');

    // Update image
    document.getElementById("mainImage").src = images[index];

    // Update progress bar
    document.getElementById("progressBar").style.width = progressPercents[index];

    // Remove active bg from all buttons
    buttons.forEach(btn => btn.classList.remove('bg-gray-500'));
    buttons.forEach(btn => btn.classList.add('bg-gray-400'));

    // Add active bg to the clicked button
    button.classList.remove('bg-gray-400');
    button.classList.add('bg-gray-500');
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