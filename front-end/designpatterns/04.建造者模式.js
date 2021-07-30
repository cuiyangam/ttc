//建造者模式
// 使用多个简单的对象一步一步构建成一个复杂的对象
class Item {
   name() {};
   packing() {};
   price() {};    
}

class Packing {
   pack(){};
}

class Wrapper extends Packing {
    pack() { return "Wrapper"; }
}

class Bottle extends Packing {
    pack() { return "Bottle"; }
}
// ===============
class Burger extends Item {
    packing() { return new Wrapper(); }
}

class ColdDrink extends Item {
    packing() { return new Bottle(); }
}

class VegBurger extends Burger {
    price() { return 25.0; }
    name() { return "Veg Burger"; }
}

class ChickenBurger extends Burger {
    price() { return 50.5; }
    name() { return "Chicken Burger"; }
}

class Coke extends ColdDrink {
    price() { return 30.0; }
    name() { return "Coke"; }
}

class Pepsi extends ColdDrink {
    price() { return 35.0; }
    name() { return "Pepsi"; }
}
// ===============
class Meal {
    items = [];    
    addItem(item){ this.items.push(item); }
    getCost(){
        let cost = 0.0;
        for (let item of this.items) {
            cost += item.price();
        }        
        return cost;
    }
 
    showItems(){
        for (let item of this.items) {
            console.log(`Item : ${item.name()}, Packing : ${item.packing().pack()}, Price : ${item.price()}`)
        }        
    }    
}

class MealBuilder {
    prepareVegMeal (){
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }   
 
    prepareNonVegMeal (){
      const meal = new Meal();
      meal.addItem(new ChickenBurger());
      meal.addItem(new Pepsi());
      return meal;
   }
}

const mealBuilder = new MealBuilder();

const vegMeal = mealBuilder.prepareVegMeal();
console.log("Veg Meal");
vegMeal.showItems();
console.log("Total Cost: " + vegMeal.getCost());

const nonVegMeal = mealBuilder.prepareNonVegMeal();
console.log("\nNon-Veg Meal");
nonVegMeal.showItems();
console.log("Total Cost: " +nonVegMeal.getCost());