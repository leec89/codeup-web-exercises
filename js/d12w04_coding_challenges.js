/*
 *
# Javascript Review

### Library Application

- Write a function called ```libApp``` that alerts a list of book objects that we want to check out. This program should:
	- Ask the user if they want to check out a book.
	- Prompt the user for the title
	- Prompt the user for the author
	- Loop until the user decides not to check out a book.
	- Alert the user a list of all book objects that were created

EX:

```
Here are the books in your cart:
	"Harry Potter and the Goblet of Fire" by J.K Rowling
	"Who Moved My Cheese?" by Spencer Johnson
	"Where the Wild Things Are" by Maurice Sendak
```

### Restaurant Randomizer

- Write a function called ```foodApp``` that alerts a restaurant name suggestion. This program should :
	- Ask the user to choose a preference. (burgers, chicken, BBQ. sandwiches ect.)
	- Loop through the array of objects to match the users preference
	- Ask the user if the suggestion is satisfactory, if not, ask again with a new suggestion.
	- Alert the user with the end choice

```
Have fun eating at *restaurant name*!
```

**/


var restaurants = [
    {type: "drive-thru", name: "McDonald's", specialty: "burgers"},
    {type: "drive-thru", name: "Dairy Queen", specialty: "burgers"},
    {type: "drive-thru", name: "Wendy\'s", specialty: "burgers"},
    {type: "drive-thru", name: "Jack in the Box", specialty: "burgers"},
    {type: "drive-thru", name: "Raising Cane\'s", specialty: "chicken"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Bill Miller\'s BBQ", specialty: "BBQ"},
    {type: "drive-thru", name: "Sonic", specialty: "burgers"},
    {type: "drive-thru", name: "Whataburger", specialty: "burgers"},
    {type: "drive-thru", name: "Taco Bell", specialty: "burritos"},
    {type: "drive-thru", name: "Panda Express", specialty: "asian cuisine"},
    {type: "drive-thru", name: "Busch\'s Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Taco Cabana", specialty: "mexican-food"},
    {type: "drive-thru", name: "Churches Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Popeye\'s", specialty: "chicken"},
    {type: "drive-thru", name: "KFC", specialty: "chicken"},
    {type: "drive-thru", name: "Freddy\'s Frozen Custard", specialty: "burgers"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Schlotzsky\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Chick-fil-a", specialty: "chicken"},
    {type: "drive-thru", name: "Laguna Madre", specialty: "fish"},
    {type: "drive-thru", name: "Little Caesar\'s", specialty: "pizza"},
    {type: "drive-thru", name: "In-N-Out", specialty: "burgers"},
    {type: "drive-thru", name: "Carl\'s Jr.", specialty: "burgers"},
    {type: "drive-thru", name: "Las Palapas", specialty: "mexican-food"},
    {type: "drive-thru", name: "Taco Palenque", specialty: "mexican-food"},
    {type: "drive-thru", name: "Mama Margie's", specialty: "mexican-food"},
    {type: "order-to-go", name: "La Madeleine", specialty: "sandwiches"},
    {type: "order-to-go", name: "Pizza Hut", specialty: "pizza"},
    {type: "order-to-go", name: "Domino\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Papa John\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Wing Stop", specialty: "wings"},
    {type: "order-to-go", name: "Plucker\'s", specialty: "wings"},
    {type: "order-to-go", name: "Wing Daddy\'s", specialty: "wings"},
    {type: "order-to-go", name: "Goomba\'s Pizzeria", specialty: "pizza"},
    {type: "order-to-go", name: "Oblate Cafe", specialty: "mexican-food"},
    {type: "order-to-go", name: "Panchito\'s", specialty: "mexican-food"},
    {type: "order-to-go", name: "Rusty Bucket\'s Jaw-Smacking BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Rudy's BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Freebird's", specialty: "burritos"},
    {type: "order-to-go", name: "Chipotle", specialty: "burritos"},
    {type: "order-to-go", name: "Blanco BBQ", specialty: "BBQ"},
    {type: "dine-in", name: "Chili's Grill & Bar", specialty: "bar-grill"},
    {type: "dine-in", name: "J. Alexander's Restaurant", specialty: "bar-grill"},
    {type: "dine-in", name: "Cheddar's Scratch Kitchen", specialty: "bar-grill"},
    {type: "dine-in", name: "Twin Peaks", specialty: "bar-grill"},
    {type: "dine-in", name: "Walk-Ons", specialty: "wings"},
    {type: "dine-in", name: "Guillermo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Applebee's", specialty: "bar-grill"},
    {type: "dine-in", name: "T.G.I. Friday's", specialty: "bar-grill"},
    {type: "dine-in", name: "Kona Grill", specialty: "asian cuisine"},
    {type: "dine-in", name: "Republic of Texas", specialty: "bar-grill"},
    {type: "dine-in", name: "Iron Cactus Mexican Restaurant and Margarita Bar", specialty: "mexican-food"},
    {type: "dine-in", name: "Paesanos Rivervalk", specialty: "italian"},
    {type: "dine-in", name: "Olive Garden", specialty: "italian"},
    {type: "dine-in", name: "Macaroni Grill", specialty: "italian"},
    {type: "dine-in", name: "Luciano's Neighborhood Pizzeria", specialty: "italian"},
    {type: "dine-in", name: "Acenar Mexican Restaurant", specialty: "mexican-food"},
    {type: "dine-in", name: "Bourbon Streen Seafood Kitchen Downtown", specialty: "seafood"},
    {type: "dine-in", name: "Red Lobster", specialty: "seafood"},
    {type: "dine-in", name: "Sea Island", specialty: "seafood"},
    {type: "dine-in", name: "Ostra Restaurant", specialty: "seafood"},
    {type: "dine-in", name: "Tomatillo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Rosario's", specialty: "mexican-food"},
    {type: "dine-in", name: "Dick's Last Resort", specialty: "bar-grill"},
    {type: "dine-in", name: "Jim's", specialty: "breakfast"},
    {type: "dine-in", name: "Denny's", specialty: "breakfast"},
    {type: "dine-in", name: "IHOP", specialty: "breakfast"},
    {type: "dine-in", name: "Waffle House", specialty: "breakfast"},
    {type: "dine-in", name: "Fogo de Chao Brazilian Steakhouse", specialty: "mexican-food"},
    {type: "dine-in", name: "Mi Tierra Cafe y Panaderia", specialty: "mexican-food"},
    {type: "dine-in", name: "Pico De Gallo", specialty: "mexican-food"},
    {type: "dine-in", name: "Margaritaville", specialty: "seafood"},
    {type: "dine-in", name: "Hooters", specialty: "wings"}
];
