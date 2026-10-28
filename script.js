const toggle = document.getElementById('langToggle');
let isUrdu = false;
toggle.addEventListener('click', () => {
  isUrdu = !isUrdu;
  document.documentElement.lang = isUrdu ? 'ur' : 'en';
  document.body.classList.toggle('urdu', isUrdu);
  document.querySelectorAll('[data-en][data-ur]').forEach(el => {
    el.textContent = isUrdu ? el.dataset.ur : el.dataset.en;
  });
  toggle.textContent = isUrdu ? 'English' : 'اردو';
});
document.getElementById('year').textContent = new Date().getFullYear();
