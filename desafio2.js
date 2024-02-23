class Heroi{
    constructor(vitorias, derrotas){
        
        this.vitorias = vitorias;
        this.derrotas = derrotas;
    }
}
function nivel(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let nivel = '';

    if(saldo <= 10){
        nivel = 'FERRO'
    }else if(saldo >= 11 && saldo < 20){
        nivel = 'BRONZE'
    }else if(saldo >= 21 && saldo < 50){
        nivel = 'PRATA'
    }else if(saldo >= 51 && saldo < 80){
        nivel = 'OURO'
    }else if(saldo >= 81 && saldo < 90){
        nivel = 'DIAMANTE'
    }else if(saldo >= 91 && saldo < 100){
        nivel = 'LENDÁRIO'
    }else{
        nivel = 'IMORTAL'
    }
    return nivel
}

const heroi = new Heroi (30, 23);
let classe = nivel(heroi.vitorias,heroi.derrotas)


console.log(`O Herói tem de saldo de ${heroi.vitorias} está no nível ${classe}`)