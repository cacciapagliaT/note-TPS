const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const btnCalcola = document.getElementById("btn-calcola");
const soluzione1txt = document.getElementById("soluzione1");
const soluzione2txt = document.getElementById("soluzione2");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const cX = canvas.width / 2;
const cY = canvas.height / 2;

const scala = 20;

function disegnaAssi() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(0, cY); 
    ctx.lineTo(canvas.width, cY);
    ctx.moveTo(cX, 0); 
    ctx.lineTo(cX, canvas.height);
    ctx.stroke();
}

disegnaAssi();

btnCalcola.addEventListener("click", () => {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        soluzione1txt.innerHTML = "Inserisci tutti i coefficienti numerici";
        return;
    }

    const d = (b ** 2) - (4 * a * c);

    if(d < 0){
        soluzione1txt.innerHTML = "Nessuna soluzione reale (Δ < 0)";
    }else if(d === 0){
        const x = -b / (2 * a);
        soluzione1txt.innerHTML = "x: " + x;
    }else{
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        soluzione1txt.innerHTML = "x1: " + x1;
        soluzione2txt.innerHTML = "x2: " + x2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    disegnaAssi();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    for (let pixelX = 0; pixelX <= canvas.width; pixelX++) {
        let x = (pixelX - cX)/scala;
        let y = a * (x * x) + b * x + c;
        let pixelY = cY - (y*scala);

        if (pixelX === 0) {
            ctx.moveTo(pixelX, pixelY);
        } else {
            ctx.lineTo(pixelX, pixelY);
        }
    }
    ctx.stroke();
});
