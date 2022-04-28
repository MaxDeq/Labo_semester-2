let student1={
    voornaam : "Jam",
    familienaam : "Cirrey",
    geboorteDatum : new Date("1962‐1‐17"),
    adres : {
        straat : "Dierenlaan 60",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    vorigeVrouwen : ["Lois", "Wachati", "Bob", "Ann"],
    aantalAutos : 4
}

const setup = () => {
    let tekst = JSON.stringify(student1);
    console.log(tekst);

    let string =  '{"voornaam":"Jam","familienaam":"Cirrey","geboorteDatum":"1962-01-17","adres":{"straat":"Dierenlaan 60",' + '"postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"vorigeVrouwen":["Lois", "Wachati", "Bob", "Ann"],"aantalAutos":4}';
    let student2 = JSON.parse(string);
    console.log(student2);
}
window.addEventListener("load", setup);