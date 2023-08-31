const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const scrollButtons = document.querySelectorAll('.scrollButton');

searchInput.addEventListener('input', filterButtons);
filterSelect.addEventListener('change', filterButtons);

function filterButtons() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = filterSelect.value;

  scrollButtons.forEach(button => {
    const buttonNumber = button.getAttribute('data-number');
    const buttonCategory = button.getAttribute('data-category');
    const isMatch = query === '' || buttonNumber.includes(query);

    if (selectedCategory === 'all') {
      button.parentElement.style.display = isMatch ? '' : 'none';
    } else if (selectedCategory === buttonCategory) {
      button.parentElement.style.display = isMatch ? '' : 'none';
    } else {
      button.parentElement.style.display = 'none';
    }
  });
}
filterButtons();