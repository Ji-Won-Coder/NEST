import axios from 'axios';
import { Move, PokeapiReponse } from '../interfases/pokeapi-responce.interface';
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

        //metodo imprimir en conola el nombre capitalizado
        scream(){
            console.log(`${this.name.toUpperCase()}!!!`);
        }
        //metodo que imprime el nombre dos veces
        speak(){
            console.log(`${this.name},${this.name}`)
        }

         async getMoves(): Promise<Move[]> {
            //onst moves =10;
            const {data} = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');
            return data.moves;
         }
    
}
export const charmander = new Pokemon(4,'charmander')
charmander.getMoves();
//console.log(charmander.getMoves); 
//charmander.id=12;
//charmander.name='Mew';
//console.log(charmander.imageUrl);
//charmander.scream();
//charmander.speak(); 