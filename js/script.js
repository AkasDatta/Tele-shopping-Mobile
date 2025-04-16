// 1st 
// Swiper js slider
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



// 2nd 
 // Auto seconds ///////////
 let countdown;
 let timeLeft = 60;
 let repeatCount = 0;

 function startCountdown() {
 countdown = setInterval(() => {
     timeLeft -= 1;
     document.getElementById('timer2').innerText = timeLeft;

     if (timeLeft <= 0) {
     clearInterval(countdown);
     repeatCount++;

     if (repeatCount < 22) {
         timeLeft = 60;
         startCountdown();
     }
     }
 }, 1000); // runs every 10ms
 }

 // Auto start on page load
 window.onload = startCountdown;



 // Auto Minute ///////////////////////

 // Wait until DOM content is fully loaded
 document.addEventListener('DOMContentLoaded', function () {
     // Initial values
     let timeRemaining = 22; // 22 minutes
     let currentPercentage = 47;
     let progressBar = document.getElementById('progressBar');
     let stockPercent = document.getElementById('stockPercent');
     let timerElement = document.getElementById('timer');

     // Debugging: Ensure elements are found
     if (!progressBar || !stockPercent || !timerElement) {
         console.error('Could not find one of the required DOM elements.');
         return;
     }

      // Start Timer (Update every minute)
      const startTimer = setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(startTimer); // Stop when time is up
            console.log('Timer has finished.');
            return;
        }

        // Decrease time by 1 minute **first**
        timeRemaining -= 1;

        // Update the timer (minutes:00 format)
        timerElement.textContent = `${timeRemaining}`;

        // Debugging: Log the time remaining
        console.log(`Time remaining: ${timeRemaining}:00`);

        // Determine the progress bar decrement based on the remaining time
        let decreaseAmount = 0;
        if (timeRemaining > 17) {
            decreaseAmount = 4;
        } else if (timeRemaining > 13) {
            decreaseAmount = 3;
        } else if (timeRemaining > 7) {
            decreaseAmount = 2;
        } else {
            decreaseAmount = 1;
        }

        // Update progress bar
        currentPercentage -= decreaseAmount;
        currentPercentage = currentPercentage < 0 ? 0 : currentPercentage;
        progressBar.style.width = `${currentPercentage}%`;
        stockPercent.textContent = `${currentPercentage}% du stock`;
      }, 60000); // Update every 600ms (should be 60000 for real minute)
 });



//  3rd 
// Focus button 
const options = document.querySelectorAll('.option');
          
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('border-[#D35400]', 'bg-[#FF71621F]', 'border-4'));
    option.classList.add('border-[#D35400]', 'bg-[#FF71621F]', 'border-4');
  });
});



// 4th
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