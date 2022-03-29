const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel."
    let list = tekst.split(' ')
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'de')
        {
            list[i] = "het"
        }
        if (list[i] === 'De')
        {
            list[i] = "Het"
        }
    }
    console.log(list.join(" "));

}
window.addEventListener("load", setup);