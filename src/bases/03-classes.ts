export class Pokemon{
   // public id   :number ;  //propiedades de una clase  
   // public name :string ;
    constructor (
        public id:number,
        public name:string
        
    ) {} //this.id=id;
        //this.name=name;
        //console.log('si a bueno')
    
}
export const charmander = new Pokemon(4,'charmander')
