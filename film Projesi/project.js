const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")

//IU objesini Başlatma

const ui = new UI();

//Storage objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme
EventListeners();

function EventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardbody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", clearAllFilms)
}
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //hata
        ui.displayMessages("Tüm alanları doldurun...", "danger")
    }

    else {
        //Yeni Fİlm Oluşturma
        const newFilm = new Film(title, director, url);
        storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
        ui.displayMessages("Film başarıyla eklendi...", "success");


        ui.addFilmToUI(newFilm)//Arayüze film ekleme
    }


    ui.clearInputs(titleElement, urlElement, directorElement);
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("silme işlemi başarılı...", "success");
    }
}

function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}