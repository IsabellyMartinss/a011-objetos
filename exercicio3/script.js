const pokemon1 = {
    nome:"Bulbasaur",
    tipo:"Grama",
    nivel: 5
};

pokemon1Copy = {...pokemon1};
pokemon1Copy.nome = "Squirtle";
pokemon1Copy.tipo = "Água";

console.log(pokemon1Copy);

pokemon1.ataque = [];

pokemon1.ataque.push({nome:'Investida',dano:40,tipo: 'Normal',precisao:100});

console.log(pokemon1);

pokemon1Copy.ataque = {...pokemon1.ataque, nome:'Jato de Água', dano:40, precisao:100, tipo:'Água'};

pokemon1.ataque.push({nome:'Folha Navalha', dano:45, precisao:100, tipo:'Grama'});

console.log(pokemon1);
console.log(pokemon1Copy);



