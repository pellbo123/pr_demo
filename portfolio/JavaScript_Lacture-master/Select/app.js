function add() {
    let opt = new Option("새 옵션", "newOption");
    let select = document.querySelector("select");
    select.add(opt);
}

function del() {
    let select = document.querySelector("select");
    select.removeChild(select.lastChild)
}
