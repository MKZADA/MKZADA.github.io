document.addEventListener('DOMContentLoaded', () => {
    const calcularBtn = document.getElementById('alerta');

    calcularBtn.addEventListener('click', () => {
        const valor1 = parseFloat(document.querySelector('#valor1 input').value) || 0;
        const valor2 = parseFloat(document.querySelector('#valor2 input').value) || 0;
        const valor3 = parseFloat(document.querySelector('#valor3 input').value) || 0;
        const valor4 = parseFloat(document.querySelector('#valor4 input').value) || 0;
        const valor5 = parseFloat(document.querySelector('#valor5 input').value) || 0;
        const valor6 = parseFloat(document.querySelector('#valor6 input').value) || 0;

        if (valor1 === 0 && valor2 === 0 && valor3 === 0 && valor4 === 0 && valor5 === 0 && valor6 === 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Você não inseriu nenhum valor",
            });
            return;
        }

        const soma1 = valor2 !== 0 ? valor1 / valor2 : "Não definido (divisão por zero)";
        const soma2 = valor4 !== 0 ? (valor3 ** 2) / valor4 : "Não definido (divisão por zero)";
        const soma3 = valor6 !== 0 ? valor5 / (valor6 ** 2) : "Não definido (divisão por zero)";

        alert(`O RESULTADO É: ${soma1}`);
        alert(`O RESULTADO É: ${soma2}`);
        alert(`O RESULTADO É: ${soma3}`);
    });
});
