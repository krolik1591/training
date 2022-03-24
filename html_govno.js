function colorizeHtml() {
    let inputs = document.getElementsByTagName("input");

    for (let yr = 0; yr < 3; yr++)
        for (let xr = 0; xr < 3; xr++) {
            let color = (yr * 3 + xr) / 9 * 360;
            for (let [y, x] of getRegion(xr, yr)) {
                inputs[y * 9 + x].style.backgroundColor = `hsl(${color}deg, 80%, 80%)`;
            }
        }
}

function getRegion(xr, yr) {
    let res = []
    for (let y = 0; y < 3; y++)
        for (let x = 0; x < 3; x++)
            res.push([yr * 3 + y, xr * 3 + x])
    return res
}


function richPrintSetka(setka) {
    let inputs = document.getElementsByTagName("input");
    for (let y = 0; y < 9; y++)
        for (let x = 0; x < 9; x++)
            inputs[y * 9 + x].value = setka[y][x]
}


colorizeHtml();
