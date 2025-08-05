class Hashtable{
    constructor(size) {
        this.table = new Array(size); /* */
        this.size = size;
        
    }
    /*funcion que toma una clave (string) como elemnto y lo 
    devuelve un indice en la tabla hash*/
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    /*funcion que agrega un elemento a la tabla hash*/
    //agregar
    
}