

// Type your code below this line!
// Constructor ShoppingList
function ShoppingList(owner) {
  // Propiedades
  this.owner = owner;      // Nombre del dueño de la lista
  this.items = {};         // Objeto para guardar productos y cantidades

  // Método para agregar productos
  this.addItem = function(product, quantity) {
    // Si el producto ya existe, sumamos la cantidad
    if (this.items[product]) {
      this.items[product] += quantity;
    } else {
      // Si no existe, lo agregamos por primera vez
      this.items[product] = quantity;
    }
    console.log(`${quantity} x ${product} agregado a la lista.`);
  };

  // Método para mostrar la lista completa
  this.showList = function() {
    console.log(`\n🛒 Lista de compras de ${this.owner}:`);
    for (let product in this.items) {
      console.log(`- ${product}: ${this.items[product]} unidades`);
    }
  };
}

const listaCami = new ShoppingList("Cami");

listaCami.addItem("velas", 3);
listaCami.addItem("incienso", 2);
listaCami.addItem("velas", 1);

listaCami.showList();
// Type your code above this line!

