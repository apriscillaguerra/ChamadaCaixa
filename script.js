const senhaCliente = document.querySelector('.senha')
const chamadaPainel = document.querySelector('.chamada')

const comum = document.querySelector('.comum')
const rapido = document.querySelector('.rapido')
const preferencial = document.querySelector('.preferencial')

const cx1 = document.querySelector('.caixa1')
const cx2 = document.querySelector('.caixa2')
const cx3 = document.querySelector('.caixa3')
const cx4 = document.querySelector('.caixa4')

const filaComum = []
const filaRapido = []
const filaPreferencial = []

let fila = 0

function adcFila() {
    fila++
    if (event.target.innerHTML === 'Comum') {
        filaComum.push('C-' + fila)
        senhaCliente.innerHTML = `C-${fila}`
    } else if (event.target.innerHTML === 'Rápido') {
        filaRapido.push('R-' + fila)
        senhaCliente.innerHTML = `R-${fila}`
    } else if (event.target.innerHTML === 'Preferencial') {
        filaPreferencial.push('P-' + fila)
        senhaCliente.innerHTML = `P-${fila}`
    }
}
function sairFila() {
    if (event.target.innerHTML === 'Caixa 1') {
        if (filaPreferencial.length != 0) {
            const clienteChamado = filaPreferencial.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaRapido.length != 0) {
            const clienteChamado = filaRapido.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaComum.length != 0) {
            const clienteChamado = filaComum.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else {
            chamadaPainel.innerHTML = 'Aguardando senhas!'
        }
    } else if (event.target.innerHTML === 'Caixa 2' || event.target.innerHTML === 'Caixa 3') {
        if (filaRapido.length != 0) {
            const clienteChamado = filaRapido.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaPreferencial.length != 0) {
            const clienteChamado = filaPreferencial.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaComum.length != 0) {
            const clienteChamado = filaComum.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else {
            chamadaPainel.innerHTML = 'Aguardando senhas!'
        }
    } else if (event.target.innerHTML === 'Caixa 4') {
        if (filaComum.length != 0) {
            const clienteChamado = filaComum.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaPreferencial.length != 0) {
            const clienteChamado = filaPreferencial.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else if (filaRapido.length != 0) {
            const clienteChamado = filaRapido.shift()
            chamadaPainel.innerHTML = clienteChamado
        } else {
            chamadaPainel.innerHTML = 'Aguardando senhas!'
        }
    }
}

comum.addEventListener('click', function (event) { adcFila() })
rapido.addEventListener('click', function (event) { adcFila() })
preferencial.addEventListener('click', function (event) { adcFila() })

cx1.addEventListener('click', function (event) { sairFila() })
cx2.addEventListener('click', function (event) { sairFila() })
cx3.addEventListener('click', function (event) { sairFila() })
cx4.addEventListener('click', function (event) { sairFila() })