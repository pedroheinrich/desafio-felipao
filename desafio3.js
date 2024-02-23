
class Heroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = ""; 

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou ataque desconhecido";
                break;
        }

       console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi = new Heroi("Aragorn", 35, "guerreiro");
const heroi2 = new Heroi("Clork", 55, "ninja");
const heroi3 = new Heroi("Ping", 85, "monge");

heroi.atacar(); 
heroi2.atacar();
heroi3.atacar();