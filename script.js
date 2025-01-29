document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-container');
    const scrollPrevButton = document.querySelector('.scroll-prev');
     const scrollNextButton = document.querySelector('.scroll-next');

     scrollPrevButton.addEventListener('click', function() {
        productContainer.scrollLeft -= productContainer.offsetWidth;
      });
      scrollNextButton.addEventListener('click', function() {
        productContainer.scrollLeft += productContainer.offsetWidth;
      });


    const timerElement = document.querySelector('.timer');
    let totalSeconds = 13 * 3600 + 55 * 60 + 38; // Initial time in seconds (13:55:38)

  function updateTimer() {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
     timerElement.innerHTML = '<span>زمان به پایان رسید</span>';
      return;
    }
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');


    timerElement.innerHTML = `<span>${formattedHours}</span>:<span>${formattedMinutes}</span>:<span>${formattedSeconds}</span>`;
    totalSeconds--;
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000); // Update every second


});
