alert("Seja Bem-Vindo a Green Corp!")


function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var telefone = document.forms["formulario"]["telefone"].value;
    var email = document.forms["formulario"]["email"].value;
    var mensagem = document.forms["formulario"]["mensagem"].value;

    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}

function validarLogin(event) {
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "Admin" && senha === "123456") {
        window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
    }
}

function DataHora() {
    var dataHoraAtual = new Date();
    var dataHoraFormatada = dataHoraAtual.toLocaleString();
    var dataHoraElemento = document.getElementById("data-hora");
    dataHoraElemento.textContent = dataHoraFormatada;
}
DataHora();
setInterval(DataHora, 1000);

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

setInterval(function () {
    currentSlide++;
    showSlide(currentSlide);
}, 5500);