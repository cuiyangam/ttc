// 意图：将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示

class Packing { pack(){} }
class Wrapper extends Packing{ pack(){ return "Wrapper";} }
class Bottle extends Packing{ pack(){ return "Bottle";} }

class Item {
  name() { }
  packing() { }
  price() { }
}
class Burger extends Item{
  packing() { return new Wrapper(); }
}
class Drink extends Item{
  packing() { return new Bottle(); }
}
class VegBurgeer extends Burger{
  name(){ return "Veg Burger";}
  price(){ return 23.0;}
}
class ChickenBurgeer extends Burger{
  name(){ return "Chicken Burger";}
  price(){ return 50.0;}
}
class Coke extends Drink {
  name() { return "Coke"; }
  price() { return 11.0; }
}
class Orange extends Drink {
  name() { return "Orange"; }
  price() { return 15.0; }
}

class Meal{
  constructor(){ this.items = []; }
  addItem(item) { this.items.push(item) }
  getCost() { return this.items.reduce((a,b)=> a += b.price(), 0)}
  showItems(){ return this.items.reduce((a,b)=> a + `\nItem: ${b.name()}, Packing: ${b.packing().pack()}, Price: ${b.price()}`, "");}
}
class MealBuilder{
  getVegMeal(){ let meal = new Meal(); meal.addItem(new VegBurgeer()); meal.addItem(new Coke()); return meal;}
  getChiMeal(){ let meal = new Meal(); meal.addItem(new ChickenBurgeer()); meal.addItem(new Orange()); return meal;}
}

let vegMeal = (new MealBuilder()).getVegMeal(); 
console.log ("vegMeal");
console.log (vegMeal.showItems()); 
console.log (vegMeal.getCost());;

let chiMeal = (new MealBuilder()).getChiMeal(); 
console.log ("\nchiMeal");
console.log (chiMeal.showItems()); 
console.log (chiMeal.getCost());
