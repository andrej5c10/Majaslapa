const prieksmeti = {
    Latviešu_valoda: 60 - 15,
    Angļu_valoda: 60 - 25,
    Bioloģija: 60 - 28,
    Ķīmija: 60 - 32,
    Fizika: 60 - 20,
    Matemātika: 60 - 18,
    }

    function myFunction() {
        const izvele = document.getElementById("ievade").value;

    if (prieksmeti[izvele]) {
        alert("Līdz " + izvele + " eksāmenam palika " + prieksmeti[izvele] + " dienas 😊");
    } else {
        alert("Lūdzu, ievadiet pareizu priekšmeta nosaukumu!");
    }
}
