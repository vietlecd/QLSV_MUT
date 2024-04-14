
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create payload as new FormData object:
    const payload = new FormData(form);
    console.log([...payload]);
})
