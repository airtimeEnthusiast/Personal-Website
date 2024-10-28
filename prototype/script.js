// JavaScript for interactivity (optional)
// This can be expanded for more complex dropdown behaviors if needed
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
    });
});