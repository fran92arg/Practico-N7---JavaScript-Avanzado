/*function Proto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
    var persona={
        nombre:"default",
        apellido:"default",
        mostrarNombre : function(){
            return (this.nombre + " " + this.apellido)
        }
    }
    var flor={
        nombre:"florencia",
        apellido: "robledo"
            }
    flor._proto_=persona;
    return flor.mostrarNombre;
}
nombre=Proto();
console.log(nombre)*/
/*function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:dfdfdf
Constructor.prototype.saludar=function(){
    return "Hello World!"
}
}
function Constructor(apellido,nombre){
    this.apellido= apellido || "Robledo"
}
console.log(agregarMetodoPrototype(Constructor));*/
/*function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj' 
    // Pista: Necesitarás usar "this" dentro de "reverse"
   
String.prototype.invertir=function(){
    return this.split("").reverse().join("");
}
}
var String="Hola, que tal";

console.log(String.invertir);*/


/*function changeNombre() {
    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor y al del getNombre()
    // Tu código:
    var persona={
        nombre: "default",
        apellido: "default",
        getNombre: function(){
            return this.nombre + " " + this.apellido
        }
        changeNombre:function(){
            this.nombre="Flor";
            this.apellido="Robledo";
            return this.nombre + " " + this.apellido;
        }
    }
    }
    var flor={
        nombre: "flor",
        apellido: "Robledo"
    }
    flor._proto_persona;
console.log(flor.changeNombre())
console.log(flor.getNombre())*/
function Object() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
    var objetoPersonaNuevo={
        nombre:"Flor",
        apellido:"Robledo"
    }
    var flor=Object.create(objetoPersonaNuevo)
    console.log(flor.nombre)
}
var obj=Object;
console.log(obj)
