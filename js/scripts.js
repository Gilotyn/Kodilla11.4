function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + '.');
}

var SamsungGalaxyS6 = new Phone('Samsung Galaxy', '2000', 'black');
var iPhone6S = new Phone('Apple', '2250', 'silver');
var OnePlus = new Phone('One Plus One', '1650', 'white');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlus.printInfo();