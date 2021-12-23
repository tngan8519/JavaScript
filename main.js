const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get gAppetizers(){
      return this._courses.appetizers;
    },
    get gMains(){
      return this._courses.mains;
    },
    get gDesserts(){
      return this._courses.desserts;
    },
    set sAppetizers(appetizerArr){
      this._courses.appetizers = appetizerArr;
    },
    set sMains(mainArr){
      this._courses.mains = mainArr;
    },
    set sDesserts(dessertArr){
      this._courses.desserts = dessertArr;
    },
    get gCourses(){
      return {
        appetizers:this.gAppetizers,
        mains:this.gMains,
        desserts: this.gDesserts
      }
    },
    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {name: dishName, price: dishPrice}
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this.gCourses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`
    }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
  menu.addDishToCourse('appetizers', 'Caesar Salad1', 1.25)
  menu.addDishToCourse('appetizers', 'Caesar Salad2', 3.25)
  menu.addDishToCourse('mains', 'Pho', 10.50)
  menu.addDishToCourse('mains', 'Pho1', 20.50)
  menu.addDishToCourse('mains', 'Pho2', 30.50)
  menu.addDishToCourse('desserts', 'Ice cream', 2.75)
  menu.addDishToCourse('desserts', 'Ice cream1', 1.75)
  menu.addDishToCourse('desserts', 'Ice cream2', 6.75)
  console.log(menu)
  let meal = menu.generateRandomMeal()
  console.log(meal)