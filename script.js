document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        header.style.backgroundColor = '#ff4d4d'; // Change background color when scrolled
      } else {
        header.style.backgroundColor = '#ff0000';
      }
    });
  });