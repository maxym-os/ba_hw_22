let flashka = prompt("На скільки Gb твоя флешка?");

const file = 840;
const gb = 1024;

alert("На твоїй флешці поміститься файлів у кількості" + " " + Math.floor(flashka / (file / gb)) + " " + "шт");