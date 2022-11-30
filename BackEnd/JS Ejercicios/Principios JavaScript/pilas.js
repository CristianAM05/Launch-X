class Pila {
    constructor(){
        this.pila = {};
        this.contador = 0;
    }

    //mete un elemento a la pila
    push(elemento){
        this.pila [this.contador] = elemento;
        this.contador++;
        return this.pila;
    }

    //saca el ultimo elemento
    pop(){
        this.contador--;
        const elemento = this.pila[this.contador];
        delete this.pila[this.contador];
        return elemento;
    }

    //mostrar el ultimo elemento
    peek(){
        return this.pila[this.contador-1];
    }

    //devolver tamaño de pila
    size(){
        return this.contador;
    }

    //imprimir pila
    print(){
        console.log(this.pila);
    }
}

const miPila = new Pila();
miPila.print();
miPila.push(69);
miPila.push("Gata");
console.log(miPila.size());
miPila.push("abc")
miPila.pop();
miPila.print();