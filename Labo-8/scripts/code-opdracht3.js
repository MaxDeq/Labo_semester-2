let personen = [];


const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();

    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {

        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {

            bewaarNieuwPersoon(persoon);
            personen.push(persoon);
            persoonGegevensInvullen(persoon);
        } else {

            persoon = personen[lstPersonen.selectedIndex];
            bewaarNieuwPersoon(persoon);
            persoonGegevensBewerken(persoon);
        }
    }
};
const vulPersoonIn = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = persoon.voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = persoon.familienaam;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = persoon.geboorteDatum.toISOString().substring(0, 10);

    let txtEmail = document.getElementById("txtEmail");
    txtEmail.value = persoon.email;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = persoon.aantalKinderen;
};
const bewaarNieuwPersoon = (persoon) =>{
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.value.trim();

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value.trim();

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value.trim());

    let txtEmail = document.getElementById("txtEmail");
    persoon.email = txtEmail.value.trim();

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen = parseInt(txtAantalKinderen.value.trim());
}

const persoonGegevensInvullen = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}

const persoonGegevensBewerken = (persoon) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
}


const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";
    lstPersonen.selectedIndex = -1;

    clearAllErrors();
};

const bewerkGeselecteerdePersoon = (geslecteerdePersoon) => {
    let index = geslecteerdePersoon.target.selectedIndex;
    let persoon = personen[index];
    vulPersoonIn(persoon);

    clearAllErrors();
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon)

};

window.addEventListener("load", setup);