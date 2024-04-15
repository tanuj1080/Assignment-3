document.addEventListener('DOMContentLoaded', function() {
    // Get all book cards
    var bookCards = document.querySelectorAll('.book');

    // Add click event listener to each book card
    bookCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Remove 'expanded' class from all cards
            bookCards.forEach(function(card) {
                card.classList.remove('expanded');
            });

            // Add 'expanded' class to the clicked card
            this.classList.add('expanded');
        });
    });
});
