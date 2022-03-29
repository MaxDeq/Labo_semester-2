const setup = () => {
    let names = ['Agnes', 'Sergeant', 'Jos', 'Truus', 'Helga'];
    console.log(names);

    console.log(names[0],names[2],names[4]);

    var v = prompt("Enter your name")
    names.push(v)
    console.log(names)

    let text = names.join(', ');
    console.log(text)
}
window.addEventListener("load", setup);