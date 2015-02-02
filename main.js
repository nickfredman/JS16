//Part 1
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
};

FoodItem.prototype.toString = function() {
    return "Name: " + this.name +
            "\nCalories: " + this.calories +
            "\nVegan?: " + this.vegan +
            "\nGluten Free?: " + this.glutenFree +
            "\nCitrus Free?: " + this.citrusFree;
};



var Drink = function(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
};

var toStringItem = function(item){
    return item.toString() + "\n";
}

var mapToString = function(arr){
    return _.map(arr,toStringItem);
}

// var mapToString = function(arr){
//     return _.map(arr,function(arrItem){
//         return arrItem.toString() + "\n";
//     })
// }

Drink.prototype.toString = function() {

    return "Name: " + this.name +
            "\nDescription: " + this.description +
            "\nPrice: " + this.price + "\n" +
            "Ingredients: " +
            mapToString(this.ingredients);
};


var Plate = function(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
};

Plate.prototype.toString = function() {
    return "Name: " + this.name +
            "\nDescription: " + this.description +
            "\nPrice: " + this.price + "\n" +
            "Ingredients: " +
            mapToString(this.ingredients);
};


Plate.prototype.isVegan = function(){
    for(var i = 0; i < this.ingredients.length; i++){

        if (this.ingredients[i].vegan === false){
            return false;
        }
    }
    return true;

};

Plate.prototype.isGlutenFree = function(){
    for(var i = 0; i < this.ingredients.length; i++){

        if (this.ingredients[i].glutenFree === false){
            return false;
        }
    }
    return true;

};

Plate.prototype.isCitrusFree = function(){
    for(var i = 0; i < this.ingredients.length; i++){

        if (this.ingredients[i].citrusFree === false){
            return false;
        }
    }
    return true;

};




var Order = function(plates){
    this.plates = plates;
}


Order.prototype.toString = function(){
    return "Order: " + mapToString(this.plates);
}

var Menu = function(plates){
    this.plates = plates;
}


Menu.prototype.toString = function(){
    return "Menu: " + mapToString(this.plates);
}

var Restaurant = function(name, description, menu){
    this.name = name;
    this.description = description;
    this.menu = menu;
};

Restaurant.prototype.toString = function(){
    return "Name: " + this.name +
            "\nDescription: " + this.description +
            "\n" + "Menu: \n" +
            mapToString(this.menu);
}

var Customer = function(dietPref){
    this.dietPref = dietPref;
};

Customer.prototype.toString = function(){
    return "Diet Preference: " + this.dietPref;
}

// Instances

var bread = new FoodItem("bread", 200, false, false, true);

var chicken = new FoodItem("chicken", 130, false, true, true);

var spinach = new FoodItem("spinach", 50, true, true, true);

var guacamole = new FoodItem("guacamole", 100, true, true, false);

var beans = new FoodItem("beans", 200, true, true, true);

var tortilla = new FoodItem("tortilla", 150, true, false, true);

var tomatoes = new FoodItem("tomatoes", 50, true, true, true);

var rice = new FoodItem("rice", 125, true, true, true);

var tequila = new FoodItem("tequila", 150, true, true, true);

var margaritaMix = new FoodItem("margarita mix", 250, true, true, false);

var burrito = new Plate("Burrito", "This is a tasty burrito", 5, [chicken, spinach, guacamole, beans, tortilla, tomatoes, rice]);

var guacamoleApp = new Plate("Guacamole Appetizer", "This is some tasty guacamoles", 4, [guacamole, tomatoes]);

var margarita = new Drink("Margarita", "This is a damn tasty Marg", 3, [tequila, margaritaMix]);

var mexicanMenu = new Menu([burrito, guacamoleApp, margarita]);

var joses = new Restaurant("Jose's", "Jose's tasty mexican food", mexicanMenu);

console.log(joses.toString());


// var tastyDrink = new Drink("Tasty Drink", "This is a tasty Drink", 2, [spinach]);


// var tastyPlate = new Plate("Tasty plate", "This is also tasty", 4, [bread, chicken]);

// var veganPlate = new Plate("Vegan plate", "This is vegan and probably not tasty", 1, [spinach]);

// var healthyOrder = new Order([tastyPlate]);

// var ourMenu = new Menu([tastyPlate]);

// var ourRestaurant = new Restaurant("Tasty Restaurant", "EVERYTHING is tasty!", ourMenu);

// var boulderCustomer = new Customer("Vegan");

// console.log(bread.toString());
// console.log(chicken.toString());
// console.log(spinach.toString());

// console.log("Drink:", tastyDrink.toString());

// console.log("Plate:", tastyPlate.toString());
// console.log("Unvegan plate:",tastyPlate.isVegan());
// console.log("Vegan plate:", veganPlate.isVegan());

// console.log("Order:", healthyOrder.toString());

// console.log("Menu:", ourMenu.toString());

// console.log("Restaurant:", ourRestaurant.toString());

// console.log("Customer:", boulderCustomer.toString());




$(document).on('ready', function() {

});