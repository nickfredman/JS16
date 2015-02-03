//Part 1

//////////////
// FoodItem //
//////////////

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

FoodItem.prototype.create = function() {

    // var vegan = this.vegan ? "Vegan" : "";
    // var glutenFree = this.glutenFree ? "GF" : "";
    // var citrusFree = this.citrusFree ? "CF" : "";
    return $('<li>' + this.name + '</li>' );

};



/////////////////////
// Drinks & Plates //
/////////////////////


var toStringItem = function(item){
    return item.toString() + "\n";
};

var mapToString = function(arr){
    return _.map(arr,toStringItem);
};

var getTotalCals = function(arr){
    return _.reduce(arr,function(total, ing){
        return total + ing.calories;
    }, 0);
};

var totallyFreeOf = function(arr,dietPref){
    for (var i = 0; i < arr.length; i++){
        if(arr[i][dietPref] === false){
            return false;
        }
    }
    return true;

};

var createItem = function(item){
    return item.create();
};

var mapCreate = function(arr){
    return _.map(arr,createItem);
};


var Drink = function(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
};

Drink.prototype.toString = function() {

    return "Name: " + this.name +
            "\nDescription: " + this.description +
            "\nPrice: " + this.price + "\n" +
            "Ingredients: " +
            mapToString(this.ingredients);
};


Drink.prototype.create = function(){

    var isGF, isCF, isV;

    isGF = totallyFreeOf(this.ingredients,"glutenFree") ? " GF" : "";
    isV = totallyFreeOf(this.ingredients,"vegan") ? " V" : "";
    isCF = totallyFreeOf(this.ingredients,"citrusFree") ? " CF" : "";

    var drinkEl = $('<div>')
        .addClass('plate')
        .append('<h3 class="plate-name">' + this.name + "</h3>" + "<span> - $</span>" + '<h3 class="plate-price">' + this.price + '</h3>')        .append(mapCreate(this.ingredients))
        .append('(')
        .append(getTotalCals(this.ingredients) + ' kcals')
        .append(isV)
        .append(isGF)
        .append(isCF)
        .append(')');

    if(isGF) {drinkEl.addClass('gf')};
    if(isV) {drinkEl.addClass('V')};
    if(isCF) {drinkEl.addclass('CF')};

    return drinkEl;

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

Plate.prototype.create = function(){

    var isGF, isCF, isV;

    isGF = totallyFreeOf(this.ingredients,"glutenFree") ? " GF" : "";
    isV = totallyFreeOf(this.ingredients,"vegan") ? " V" : "";
    isCF = totallyFreeOf(this.ingredients,"citrusFree") ? " CF" : "";

    var plateEl = $('<div>')
        .addClass('plate')
        .append('<h3 class="plate-name">' + this.name + "</h3>" + "<span> - $</span>" + '<h3 class="plate-price">' + this.price + '</h3>')
        .append(mapCreate(this.ingredients))
        .append('(')
        .append(getTotalCals(this.ingredients) + ' kcals')
        .append(isV)
        .append(isGF)
        .append(isCF)
        .append(')');

    if(isGF) {plateEl.addClass('gf')};
    if(isV) {plateEl.addClass('V')};
    if(isCF) {plateEl.addclass('CF')};

    return plateEl;

};


var Order = function(plates){
    this.plates = plates;
};


Order.prototype.toString = function(){
    return "Order: " + mapToString(this.plates);
};

///////////
// Menus //
///////////

var Menu = function(plates){
    this.plates = plates;
};


Menu.prototype.toString = function(){
    return "Menu: " + mapToString(this.plates);
};

Menu.prototype.create = function(){
    var menuEl = $('<div>')
        .addClass('menu')
        .append(mapCreate(this.plates));

    return menuEl;
};

////////////////
// Restaurant //
////////////////

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
};

Restaurant.prototype.create = function(){
    var restaurantEl = $('<div>')
        .addClass('restaurant')
        .append('<h1>' + this.name + '</h1>')
        .append('<span class="descrip">' + this.description + '</span>')
        .append('<p>Click any item to add to your order</p>')
        .append(this.menu.create());

    return restaurantEl;
};

var Customer = function(dietPref){
    this.dietPref = dietPref;
};

Customer.prototype.toString = function(){
    return "Diet Preference: " + this.dietPref;
};

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
    var $totalPrice = 0;

    var dietPreferences = [];

    $('body').append(joses.create());

    $('.plate').on('click', function() {
        var $name = $('<span>').addClass('order-item-name').append($(this).find('.plate-name').text());
        var $price = $('<span>').addClass('order-item-price').append($(this).find('.plate-price').text());
        var $div = $('<div>')
        .append($name)
        .append('<span> - $</span>')
        .append($price);
        $('.ordered-items').append($div);
        $totalPrice += Number($(this).find('.plate-price').text());
        $('.total-price').text('$' + $totalPrice);
    });

    var updateHighlight = function(){
        $('.plate').removeClass('highlight');
        
        var preferences = "";
        preferences = dietPreferences.join("");
        $('.plate').filter(preferences).addClass('highlight');

    };

    // Check for updates to the diet preferences

    $(':checkbox').on('click',function(){
        dietPreferences = [];

        if($('.vegan:checked').length > 0){
            dietPreferences.push('.V');
        }
        if($('.gf:checked').length > 0){
            dietPreferences.push('.gf');
        }
        if($('.cf:checked').length > 0){
            dietPreferences.push('.cf');
        }

        updateHighlight();
    });



});