export  let  name: string='maria';
export const age: number =19;  
export const isValid: boolean = true;

name = 'aqui';
//name=  111;
//name=  111;

export const templateString = `esto es un string

inyectar valores ${name}
espresiones ${1 +1}
numeros ${age}
booleanos ${isValid}



` 
console.log(templateString);
