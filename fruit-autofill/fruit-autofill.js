const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Grapes', 'Watermelon', 'Pineapple', 'Mango', 'Kiwi', 'Peach'];

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));

        renderResults(filteredFruits);
    });

    function renderResults(results) {
        if (results.length > 0) {
            const html = results.map(result => `<div class="fruitItem">${result}</div>`).join('');
            searchResults.innerHTML = html;
            
            const fruitItems = document.querySelectorAll('.fruitItem');
            fruitItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.classList.add('highlighted');
                });
                item.addEventListener('mouseleave', function() {
                    this.classList.remove('highlighted');
                });
                item.addEventListener('click', function() {
                    searchInput.value = this.textContent;
                    searchInput.dispatchEvent(new Event('input'));
                });
            });
        } else {
            searchResults.innerHTML = '<div>No results found</div>';
        }
    }
});