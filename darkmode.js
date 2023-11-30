function toggle() {
    let b = localStorage.getItem('switch');
    if (b === null) {
        b = false;
    } else {
        b = JSON.parse(b);
    }

    localStorage.setItem("switch", !b);
    let bod = document.body;
    bod.classList.toggle("dark-mode");
 }

function setMode() {
    document.getElementById("darkmode").style.display = 'block';
    let b = localStorage.getItem('switch');
    if (b === null) {
        b = false;
    } else {
        b = JSON.parse(b);
        if(b === true) {
            let bod = document.body;
            bod.classList.toggle("dark-mode");
        }
    }
}

