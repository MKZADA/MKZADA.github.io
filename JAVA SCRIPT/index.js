function outrapagina() {
    let calculoSelect = document.getElementById("calculo");
    let calculoSelecionado = calculoSelect.value;

    switch (calculoSelecionado) {
        case "RE":
            window.location.assign("../HTML/RE.html");
            break;
        case "PO":
            window.location.assign("../HTML/PO.html");
            break;
        case "TE":
            window.location.assign("../HTML/TE.html");
            break;
        case "CO":
            window.location.assign("../HTML/CO.html");
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Você não escolheu nenhuma opção",
            });
    }
}

document.getElementById("alerta").addEventListener("click", outrapagina);
