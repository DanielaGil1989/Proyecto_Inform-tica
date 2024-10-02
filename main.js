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