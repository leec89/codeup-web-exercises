



function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let searchedCoffee = searchText.value.toLowerCase();
    let searchedCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(searchedCoffee)) {
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffees);
}

var searchText = document.querySelector('#search-text');
searchText.addEventListener('click', searchCoffees);