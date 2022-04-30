let RNA1 = []
class Conversao {
    constructor(filamento) {
        this.filamento = filamento
    }

    conversao(DNA) {
        let teste = DNA.split("")

        for (let letra of teste) {
            if (letra == "C") {
                letra = "G"
                RNA1.push(letra)

            } else if (letra == "G") {
                letra = "C"
                RNA1.push(letra)

            } else if (letra == "T") {
                letra = "A"
                RNA1.push(letra)

            } else if (letra == "A") {
                letra = "U"
                RNA1.push(letra)
            }
            
        }

       let teste2 = RNA1.join("")
       console.log(teste2)
    }

}

const teste1 = new Conversao("ATGCCGAAATTTGCG")

teste1.conversao(teste1.filamento)

