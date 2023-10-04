// let = value;


// const now = new Date()// Şu anki zamanı almamızı sağlar


// const date1 = new Date("9-19-1993 15:06:00");

// value = date1;


// // console.log(now);


// console.log(value);

// function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
//     console.log(`isim: ${name}\n yaş:${age}`)
// }

// merhaba("Ayşegül", 40);//fonksiyon çağrısı

// merhaba("Aydın", 46);//fonksiyon çağrısı

// merhaba("Kemal Recep", 17);//fonksiyon çağrısı


function square(x) {
    return x * x
}

function cube(x) {
    return x * x * x
}


let a = square(12);

a = cube(a);

console.log(a);