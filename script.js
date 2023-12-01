// Get the modal and button elements
var modal = document.getElementById('whatsappModal');
var contactBtn = document.getElementById('contactBtn');

// Open the modal when the "Contact" button is clicked
contactBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal when the close button or outside the modal is clicked
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
