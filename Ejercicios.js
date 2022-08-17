function Queue() {
    // Implementa la clase Queue
    // enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
    // dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow 
    //(cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
    // size:   Devuelve el número de elementos que contiene la queue.
    this.array = [];
    Queue.prototype.enqueue=function(num){
        return this.array.push(num)
    }
    Queue.prototype.size=function(){
        return this.array.length
    }
    Queue.prototype.dequeue=function(){
        if(this.array.length>0){
            return this.array.shift()
        }else return -1
    }
}
// var prueba=new Queue
// prueba.enqueue(2)
// prueba.enqueue(3)
// prueba.dequeue()
// console.log("largo:",prueba.size())
// console.log(prueba)

function cardGame(mazoA,mazoB) {
    // Implementar la función cardGame: a partir de dos Queue que va a recibir como paráemtros 
    //tiene que determinar quién será el ganador del juego de cartas. Las reglas de dicho juego 
    //son las siguientes:
    //    - Cada jugador tendrá un mazo con cartas numeradas del 1 al 12
    //    - Estos mazos estarán implementados a partir de la estructura de Queue.
    //    - En cada turno del juego, cada jugador lanzará la carta que se encuentre primero 
    //     en su mazo (Queue)
    //    - El jugador que tenga el número más alto en el turno ganará dicho turno
    //    - El jugador que gane dicho turno se quedará con ambas cartas agregándolas al final 
    //    del mazo (Primero
    //    la suya y luego la de su contrincante)
    //    - En el caso de que haya empate ambos pierden las cartas y no se agregan a ningún mazo
    //    - El ganador del juego será quien deje a su oponente sin cartas en su mazo
    // Aclaración: la función cardGame debe retornar "A wins!" en el caso de que el ganador 
    // sea el jugador A o
    // "B wins!" en caso contrario. [Puede ocurrir que haya empate, en dicho caso retornat 
    // "Game tie!"]
    // Ejemplo:
    //    - mazoUserA = [4,2,10,11]
    //    - mazoUserB = [6,9,10,3]
    //    Primer mano:
    //     A --> 4  vs  6 <-- B [6 > 4 entones gana la mano B y pone ambas cartas en su mazo, 
    //    colocando primero la suya]
    //    - mazoUserA = [2,10,11]
    //    - mazoUserB = [6,9,10,3,6,4]
    var temp1
    var temp2
    while ((mazoA.length>0)&&(mazoB.length>0)) {
        //como en cada pasada saco una carta el bucle while se parará eventualmente
        if(mazoA[0]===mazoB[0]){
            //empate,quito las dos cartas
            mazoA.shift()
            mazoB.shift()
        }else if(mazoA[0]>mazoB[0]){//gana el mazo A
            temp1=mazoB.shift()//guardo la carta menor(del mazo B)
            temp2=mazoA.shift()//guardo la carta mayor(del mazo A)
            mazoA.push(temp2)  //guardo primero su carta
            mazoA.push(temp1)   //guardo luego la otra carta
        }else{//caigo aca porq la carta B es mayor
            temp1=mazoA.shift()//guardo la carta menor(del mazo A)
            temp2=mazoB.shift()//guardo la carta mayor(del mazo B)
            mazoB.push(temp2)  //guardo primero su carta
            mazoB.push(temp1)   //guardo luego la otra carta
        }
    }
    //fin del while
    if((mazoA.length===0)&&(mazoB.length===0)){
        //empate
        console.log("Game tie!")
    }
    mazoA.length===0?console.log("B wins!"):console.log("A wins")
    
}
mazoB=[1,2,3,4]
// mazoA=[0,1]
// cardGame(mazoA,mazoB)
// console.log("Mazo A: ",mazoA)
// console.log("Mazo B: ",mazoB)
function sets(arreglo1,arreglo2) {
    // Implementa el metodo sets    
    // Usar el objeto set para obtener la cantidad de elementos iguales en dos arreglos
    // Muestra la cantidad
    // Aqui tu codigo
    s1=new Set(arreglo1)
    s2=new Set(arreglo2)//para eliminar los repetidos
    var cuenta=0;
    for(elem1 of s1){
        for(elem2 of s2){
            if (elem1===elem2){
                ++cuenta
            }
        }
    }
    return cuenta
}
a1=[0,1,2,3]
a2=[1,2,3,0]
var cant=sets(a1,a2)
console.log("Cantidad de elementos repetidos: ",cant)