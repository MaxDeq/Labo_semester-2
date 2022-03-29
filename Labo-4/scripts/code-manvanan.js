const setup = () => {

    let tekst = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase().split(" ");
    let aantal = 0;
    let stuk;

    for(let i = 0; i < tekst.length; i++){
        stuk = tekst[i];
        if(stuk.indexOf("an") >= 0){
            aantal++;
        }
    }


    console.log(aantal + " keer komt 'An' voor in de zin.");
}
window.addEventListener('load', setup);