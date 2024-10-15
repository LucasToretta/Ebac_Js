const form = document.getElementById ('Form-enviar');

function validaNumero(NumeroB) {
    return NumeroB.length > NumeroA
}

form.addEventListener('submit', function(e) {
    let FormEValido = false;
    e.preventDefault();

    const NumeroA = document.getElementById('NumeroA');
    const NumeroB = document.getElementById('NumeroB');
    const mensagemSucesso = 'Tudo certo';

    FormEValido = validaNumero(NumeroB.value)
if (FormEValido) {
    alert(mensagemSucesso);

    NumeroA.value = '';
    NumeroB.value = '';
} else {
    alert('O segundo número precisa ser maior que o primeiro');
    }
})

console.log (form)