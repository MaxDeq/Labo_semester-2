const setup = () => {

    let img = new Image();
    img.src = 'img/foto.jpg';
    var holder = document.getElementById('placehere');
    holder.appendChild(img);

}
window.addEventListener("load", setup);