const setup = () => {
    let string1 = 'Jam Cirrey';
    let string2 = 'Jam Cirrey';
    if(string1 === string2){
        console.log("== is gelijk");
    }
    if(string1 === string2){
        console.log("=== is gelijk");
    }
    if(string1.slice(0,9) === string2){
        console.log("== is gelijk");
    }
    if(string1.slice(0,2) === "tes"){
        console.log("=== is gelijk");
    }
    let concatenatie = string1 + string2;
    console.log(concatenatie.slice(1,5));
}
window.addEventListener("load", setup);