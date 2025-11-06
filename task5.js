function FriendsList() {
  this.names = []; 
  this.addFriend = function(name) {
    this.names.push(name);
  };

  this.showFriends = function() {
    console.log("Lista de amigos:", this.names);
  };
}
const lista = new FriendsList();

const cantidad = parseInt(prompt("¿Cuántos amigos quieres agregar? "));

for (let i = 0; i < cantidad; i++) {
  const nombre = prompt(`Ingresa el nombre del amigo ${i + 1}: `);
  lista.addFriend(nombre);
}

lista.showFriends();






