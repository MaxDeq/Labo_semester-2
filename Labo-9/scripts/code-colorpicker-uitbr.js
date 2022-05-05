let swatches = []

const initialize = () =>{
    let btnSave = document.getElementById("btnSave")
    let sliders = document.getElementsByClassName("slider")
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update)
        sliders[i].addEventListener("input", update)
    }
    let red = localStorage.getItem("demo.red")
    document.getElementById("sldRed").setAttribute("value", red)
    let green = localStorage.getItem("demo.green")
    document.getElementById("sldGreen").setAttribute("value", green)
    let blue = localStorage.getItem("demo.blue")
    document.getElementById("sldBlue").setAttribute("value", blue)

    loadSwatches()
    update()

    btnSave.addEventListener("click", saveSwatch)
}

const loadSwatches = () =>{
    jsonText = localStorage.getItem("demo.swatches")
    if (jsonText != null) {
        let swatchComponents = document.getElementById("swatchComponents")
        let rgbColors = JSON.parse(jsonText)
        for (let i = 0; i < rgbColors.length; i++) {
            let rgb = rgbColors[i]
            swatches.push(swatchComponents.appendChild(buildSwatchRgb(rgb)))
        }
    }
}

const saveSwatch = () =>{
    let swatchComponents = document.getElementById("swatchComponents")
    let swatch = buildSwatch()
    swatchComponents.appendChild(swatch)
    swatches.push(swatch)
    let array = []
    for (let i = 0; i < swatches.length; i++) {
        array.push(swatches[i])
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].outerHTML.substr(array[i].outerHTML.search("rgb"), array[i].outerHTML.search(";") - array[i].outerHTML.search("rgb"))
    }
    jsonArray = JSON.stringify(array)
    localStorage.setItem("demo.swatches",jsonArray)
}

const configureSwatch = (swatch) =>{
    let red = document.getElementById("sldRed").value
    swatch.setAttribute("data-red", red)

    let green = document.getElementById("sldGreen").value
    swatch.setAttribute("data-green", green)

    let blue = document.getElementById("sldBlue").value
    swatch.setAttribute("data-blue", blue)

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")"
}

const buildSwatch = () =>{
    let swatch = document.createElement("div")
    let btnDelete = document.createElement("input")

    swatch.className = "swatch"
    configureSwatch(swatch)
    swatch.addEventListener("click", setColorPickerFromSwatch)

    btnDelete.setAttribute("type", "button")
    btnDelete.setAttribute("value", "X")
    btnDelete.addEventListener("click", deleteSwatch)

    swatch.appendChild(btnDelete)
    return swatch
}

const buildSwatchRgb = (rgb) =>{
    console.log(rgb)
    let swatch = document.createElement("div")
    let btnDelete = document.createElement("input")


    swatch.className = "swatch"
    swatch.style.background = rgb
    swatch.addEventListener("click", setColorPickerFromSwatch)

    btnDelete.setAttribute("type", "button")
    btnDelete.setAttribute("value", "X")
    btnDelete.addEventListener("click", deleteSwatch)

    swatch.appendChild(btnDelete)
    return swatch
}

const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target

    let red = swatch.getAttribute("data-red")
    document.getElementById("sldRed").value = red

    let green = swatch.getAttribute("data-green")
    document.getElementById("sldGreen").value = green

    let blue = swatch.getAttribute("data-blue")
    document.getElementById("sldBlue").value = blue

    update()
}

const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents")
    let button = event.target
    let swatch = button.parentNode
    delete swatches[swatches.indexOf(swatch)]
    swatches = swatches.filter(function () { return true })
    let array = []
    for (let i = 0; i < swatches.length; i++) {
        array.push(swatches[i])
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].outerHTML.substr(array[i].outerHTML.search("rgb"), array[i].outerHTML.search(";") - array[i].outerHTML.search("rgb"))
    }
    jsonArray = JSON.stringify(array)
    
    localStorage.setItem("demo.swatches",jsonArray)
    swatchComponents.removeChild(swatch)
}

const update = () =>{
    let red = document.getElementById("sldRed").value
    document.getElementById("lblRed").innerHTML = red
    localStorage.setItem("demo.red", red)

    let green = document.getElementById("sldGreen").value
    document.getElementById("lblGreen").innerHTML = green
    localStorage.setItem("demo.green", green)

    let blue = document.getElementById("sldBlue").value
    document.getElementById("lblBlue").innerHTML = blue
    localStorage.setItem("demo.blue", blue)

    let swatch = document.getElementById("swatch")
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")"
}
window.addEventListener("load", initialize)