// {"mail": "admin@admin.com", "pass":"123"}


// [
//     {"mail": "admin@admin.com", "pass":"123"},
//     {"mail": "admin2@admin.com", "pass":"321"}
// ]


let mail = false;
let pass = false;
let user;


$(window).ready(function () {
    if (sessionStorage.getItem("user")) {
        user = JSON.parse(sessionStorage.getItem("user"))
    }
    else {
        user = [];
    }

    console.log(user)
})

function control() {

    // if (user.mail == $("#exampleInputEmail1").val()) {
    //     mail = true;
    //     console.log("mail doğru")

    //     if (user.pass == $("#exampleInputPassword1").val()) {
    //         pass = true;
    //         console.log("şifre doğru")
    //     }
    //     else {
    //         mail = false;
    //         pass = false;
    //     }
    // }
    // else {
    //     mail = false;
    // }

    let veri = user.filter(data => data.mail == $("#exampleInputEmail1").val() && data.pass == $("#exampleInputPassword1").val())

    return veri[0];
}


$("button.btn.btn-primary").click(function (e) {
    e.preventDefault();
    let cont = control();
    console.log(cont)
    // if (mail == true && pass == true) {
    //     // Giriş yapıldı

    //     alert("Giriş yapıldı")

    //     $("#submit").on("click", function () {
    //         $(".student").addClass("active")
    //     });

    // }
    // else {
    //     alert("Hatalı işlem")
    // }
})


const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//inputlar
const addkey = document.querySelector("#addkey")
const addvalue = document.querySelector("#addvalue")
const deletekey = document.querySelector("#deletekey")


add.addEventListener("click", addItem)
del.addEventListener("click", deleteItem)
clear.addEventListener("click", clearItem)

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value)
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value)
}

function clearItem(e) {
    sessionStorage.clear();
}

