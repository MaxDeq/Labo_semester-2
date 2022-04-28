const setup = () => {
    let date = new Date();
    let birth = new Date(2003, 3, 12);
    let verschil = date - birth;
    let dagen = Math.round(verschil/1000/60/60/24);
    console.log(dagen + " dagen oud.");
}
window.addEventListener("load", setup);


