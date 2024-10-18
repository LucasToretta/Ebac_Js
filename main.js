
const form = document.getElementById ('Form-enviar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const NumeroA = document.getElementById('NumeroA');
    const NumeroB = document.getElementById('NumeroB');
    const mensagemSucesso = `Tudo certo!`;

    if (NumeroB.value > NumeroA.value) {
        alert(mensagemSucesso);

        NumeroA.value = '';
        NumeroB.value = '';
    } else {
        alert("O segundo número precisa ser maior que o primeiro");
    }
})

console.log(form);