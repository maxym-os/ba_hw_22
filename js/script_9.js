let n = prompt("Введи трьохзначне число");
    a = n % 10;
    b = Math.floor(n / 10) % 10;
    c = Math.floor(n / 100) % 10;

alert(a + '' + b + '' + c);