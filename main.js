//Singleton
class Contador{
    constructor(){
        if(Contador.instance){
            return Contador.instance
        }
        this.click=0;
        Contador.instance = this; 
    }
    añadirClick(){
        this.click++
    }
    contarClick(){
        return this.click;
    }
}

function actualizarClick(){
    const contador = new Contador();
    contador.añadirClick();
    document.getElementById("contador").textContent= contador.contarClick();
}

//TEACHEEER, no pude implementar adapter
//Nuevo Click
class NuevoClick {
    constructor() {
        this.click=0
    }

    incrementar() {
        this.click++
    }

    actualizar() {
        return this.click;
    }
}

//Adapter
class ContadorAdapter {
    constructor(nuevo) {
        this.nuevo = nuevo;
    }

    añadirClick() {
        this.nuevo.incrementar();
    }
    contarClick() {
        this.nuevo.actualizar();
    }
}
const nuevo = new NuevoClick();

function clickNuevo(){
    const adaptador = new ContadorAdapter(nuevo);
    adaptador.añadirClick();
    document.getElementById("contador").textContent=adaptador.contarClick();
}