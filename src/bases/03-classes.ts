export class Pokemon{
   // public id   :number ;  //propiedades de una clase  
   // public name :string ;

   get imageUrl() :string{ //regresa un string
    return `https://pokemon.com/ ;${this.id }.png`
}



    constructor (
        public  readonly id:number,
        public name:string,
    ) {} //this.id=id;
        //this.name=name;
        //console.log('si a bueno')
    
}
export const charmander = new Pokemon(4,'charmander')

//charmander.id=12;
//charmander.name='Mew';
console.log(charmander.imageUrl);