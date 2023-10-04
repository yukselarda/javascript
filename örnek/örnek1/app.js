
function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
    console.log(`isim: ${name}\n yaş:${age}`)
}


const cevap = prompt("Hangi sınıf")

if (cevap == "12/C") {

    merhaba("Ayşegül", 18);

    merhaba("Aydın", 16);

    merhaba("Kemal Recep", 17);

    merhaba("Kemal ", 17);

    merhaba("Recep", 17);

    merhaba("Baran", 17);

    merhaba("Burak", 17);
}



else if (cevap == "12/A") {
    merhaba("Ayşegül", 18);

    merhaba("Aydın", 16);

    merhaba("Kemal Recep", 17);

    merhaba("Kemal ", 17);

    merhaba("Recep", 17);

    merhaba("Baran", 17);

    merhaba("Burak", 17);
}


else if (cevap == "12/D") {
    merhaba("Ayşegül", 18);

    merhaba("Aydın", 16);

    merhaba("Kemal Recep", 17);

    merhaba("Kemal ", 17);

    merhaba("Recep", 17);

    merhaba("Baran", 17);

    merhaba("Burak", 17);
}

else {
    console.log("Yanlış")
}


