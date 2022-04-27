const setup = () => {

    const date = new Date();
    console.log(date);
    const kerst = new Date(2022,11,25);
    console.log(kerst);

    const df = kerst.getTime() - date.getTime();
    console.log(df);

    const days = df / (60*60*24*1000);
    console.log(days);

}
window.addEventListener("load", setup);

const date = () => {

    const date = new Date();
    console.log(date);
    const birth = new Date(2023,2,12);
    console.log(birth);

    const df = birth.getTime() - date.getTime();
    console.log(df);

    const days = df / (60*60*24*1000);
    console.log(days);

}
window.addEventListener("load", date);


