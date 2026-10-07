class User{
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() { }
  logout(){ }
}

class Customer extends User{
  cart = [];
  constructor(name, email) {
    super(name,email)
    //this.name = name;
    //this.email = email;
  }
  buyProduct() {    }
  addToCart(item) {
    this.cart.push(item);
  }
  showCartItem() {
    console.log(this.cart);
  }
  //login() { }
  //logout(){ }
}

class Seller extends User{
  
  constructor(name, email) {
    super(name,email)
    //this.name = name;
    //this.email = email;
    
  }
  addProduct() { }
  //login() { }
  //logout(){ }
}

class Admin extends User{
  constructor(name, email) {
    //this.name = name;
    //this.email = email;
  }
  hideProduct() { }
  //login() { }
  //logout() { }
  
}


const c1 = new Customer("anand", "anand123@gmail.com");
c1.addToCart("tshirt")
c1.showCartItem();

class PremiumCustomer extends Customer{
  constructor(name, email) {
    super(name,email)
  }
}