document.addEventListener('DOMContentLoaded', () => {
    // Select essential DOM nodes
    const bookBtn = document.getElementById('bookBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('closeBtn');
    const confirmBtn = document.getElementById('confirmBtn');

    // UI Interaction: Open Modal
    bookBtn.addEventListener('click', () => {
        bookingModal.classList.add('active');
    });

    // UI Interaction: Close Modal (Cancel)
    closeBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });

    // UI Interaction: Close Modal when clicking outside the card wrapper
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
        }
    });

    // Action Pipeline: Form submission confirmation simulation
    confirmBtn.addEventListener('click', () => {
        confirmBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        confirmBtn.style.pointerEvents = 'none';
        
        setTimeout(() => {
            alert('Appointment request sent successfully!');
            bookingModal.classList.remove('active');
            
            // Restore button baseline state
            confirmBtn.innerHTML = 'Confirm & Continue';
            confirmBtn.style.pointerEvents = 'auto';
        }, 1500);
    });
});
