const pisos = [
    {
        piso: "3",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "4",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    },
    {
        piso: "5",
        no_aprovechables: 0,
        organicos: 0,
        aprovechables: 0
    }
];

const btnSubmit = document.querySelector("#btnSubmit");
const piso = document.querySelector("#select_floor");
const btnOpenModal = document.querySelector("#btnOpenModal");
const canecas = document.querySelectorAll(".bowl");
let tipoCanecaAgregar;

document.addEventListener("DOMContentLoaded", () => {
    pisos.push
})
piso.addEventListener("change", pintarPuntoEcologico);

canecas.forEach(caneca => {
    caneca.addEventListener("click", () => {
        btnOpenModal.click();

        tipoCanecaAgregar = caneca.getAttribute("type-bowl");
        console.log(tipoCanecaAgregar);
    })
})

btnSubmit.addEventListener("click", () => {
    const pisoAgregar = piso.value;
    const cantidadAñadir = document.getElementById("cantidad").value;

    pisos.forEach(puntoEco => {
        if (puntoEco.piso == pisoAgregar) {
            puntoEco[tipoCanecaAgregar] += parseInt(cantidadAñadir);
            document.querySelector("#btnCloseModal").click();
            document.getElementById("cantidad").value = "";
            pintarPuntoEcologico();
        }
    })


})

function pintarPuntoEcologico() {
    const pisoAgregar = piso.value;
    pisos.forEach(puntoEco => {
        if (puntoEco.piso == pisoAgregar) {
            canecas.forEach(caneca => {
                caneca.querySelector(".body_top span").textContent = `${puntoEco[caneca.getAttribute("id")]}/500`;
            })
        }
    })

}

function guardarPisosLS() {
    localStorage.setItem("pisos", pisos);

}

function traerPisosLS() {
    return JSON.parse(localStorage.getItem("pisos"))
}



































