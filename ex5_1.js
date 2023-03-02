// declara vetor de escopo global que irá conter os números já apostados
var erros = []

// gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1

// declara constante com o número de chances
const CHANCES = 6

var btApostar = document.getElementById('btApostar')
var btJogar = document.getElementById('btJogar')

function apostar() {

    // cria referência ao campo de entrada e obtém seu conteúdo
    var numero = document.getElementById('num').value

    // valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) { // isNAN = Saber se o valor da variavel é um numero
        alert("Informe um número válido...")
        numero.focus()
    }

    // referencia espaços das saídas de dados
    var outDica = document.getElementById('dica')
    var outErros = document.getElementById('erros')
    var outChances = document.getElementById('chances')

    // se aposta do jogador for igual ao número sorteado

    if (numero == sorteado) {

        alert("PARABÉNS!! Você acertou!")

        //troca status dos botões
        btApostar.disable = true
        btJogar.className = "exibe"
        outDica.textContent = "Parábens!! Número sorteado: " + sorteado
    } else {
        // se o número existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro...")
        } else {
            erros.push(numero) // adiciona o número ao vetor
            var numErros = erros.length // obtem o tamanho do vetor
            var numChances = CHANCES - numErros // calcula o número de chances

            // exibe o n° de erros, conteudo do vetor e de chances
            outErros.textContent = numErros + " (" + erros.join(", ") + ")"
            outChances.textContent = numChances

            if (numChances == 0) {
                alert("Suas chances acabaram...")
                btApostar.disable = true
                btJogar.className = "exibe"
                outDica.textContent = "Game Over! Número sorteado: " + sorteado
            } else {
                // usa o operador ternario (condicional) para mensagem da dica
                var dica = numero < sorteado ? "maior" : "menor"
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero
            }
        }
    }

    // Limpa campo de entrada e posiciona cursor neste campo
    numero.value = ""
    numero.focus()
}

function jogarnovamente() {
    location.reload() // recarrega a pagina 
}
