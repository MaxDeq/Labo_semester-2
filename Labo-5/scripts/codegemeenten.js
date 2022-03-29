const setup = () => {
    let stop = false
    let list = [];
    while (stop === false){
        let gemeente = window.prompt("Gemeenten:")
        if (gemeente !== 'stop') {
            list.push(gemeente)
        }else{stop= true}
    }
    let sortedList = list.sort();
    for (let i = 0; i < sortedList.length; i++) {
        document.getElementById('gemeentes').innerHTML +=  `<option value="${sortedList[i]}">${sortedList[i]}</option>`
    }
}
window.addEventListener("load", setup);