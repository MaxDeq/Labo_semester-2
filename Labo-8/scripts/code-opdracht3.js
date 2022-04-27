let personen = [];
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
};
window.addEventListener("load", setup);