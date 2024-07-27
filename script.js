document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        this.classList.toggle('inactive');
    });
});
