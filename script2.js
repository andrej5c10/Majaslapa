const prieksmeti = {
    Latviešu_valoda: 60 - 15,
    Angļu_valoda: 60 - 22,
    Bioloģija: 60 - 33,
    Ķīmija: 60 - 39,
    Fizika: 60 - 20,
    Matemātika: 60 - 50,
    }

    function myFunction() {
        const izvele = document.getElementById("ievade").value;

    if (prieksmeti[izvele]) {
        alert("Līdz " + izvele + " eksāmenam palika " + prieksmeti[izvele] + " dienas 😊");
    } else {
        alert("Lūdzu, ievadiet pareizu priekšmeta nosaukumu!");
    }
}
