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
