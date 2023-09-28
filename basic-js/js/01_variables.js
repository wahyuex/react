console.log("------ Variables ------");

// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Baris ini akan mencetak nilai dari i


// Var
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
}
looping();
console.log(j); // Baris ini akan menghasilkan kesalahan - j tidak didefinisikan


// Let
for (let k = 0; k < 5; k++) {
    console.log(k);
}
console.log(k); // Baris ini akan menghasilkan kesalahan - k tidak didefinisikan

// let
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =", l); // Ini akan mencetak nilai l dalam blok if
}

// Const
const phi = 3.14;
phi = 3.147; // Baris ini akan menghasilkan kesalahan - Penugasan ke variabel konstan
console.log(phi);
