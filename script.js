//tu som vytvoril pole filmov
let films = [];
//tu je funkcia na pridanie filmu do pola
function newFilm(){
    //tu  si nacitam hodnoty z html formularu
    let filmName = document.getElementById("filmName");
    let year = document.getElementById("year");
    let actors = document.getElementById("actors");
    //tu vytvorim objekt
    var film = {
        "name": filmName.value,
        "year": year.value,
        "actors": actors.value
    };

    films.push(film);
//vynulovanie hodnot z formularu
    filmName.value = "";
    year.value = "";
    actors.value = "";

    writeFilms();
} ;

function writeFilms(){      //pole na aktualizovanie zoznamu v konzole
    console.log("*****************************názvy filmov***********************")
    console.log(films);
};

function deleteLastFilm(){
    if(films.length > 0){   //ak je velkost pola vecsia ako 0 tak sa vykona telo cyklu
    films.pop();            //ostrani posledny index z pola
    writeFilms();       
    };
};

function deleteAllFilms(){
    films = [];             //hodi hodnoty na defaultnu hodnotu
    writeFilms();
};




