function myFunction() {
    alert("Lidz eksāmeniem palika x dienas 😊");
  }

  const persona = {
    Latviešu_valoda: "Alise",
    Angļu_valoda: "Liepa",
    Bioloģija: 2026-2003,
    Ķimija: `studente`,
    Fizika: ["Oskars", `Anna`, `Aivars`, `Zane`]
    Matemātika: 2026-3,
}
//Šim objektam ir 5 rekvizīti (property) un 5 vērtības
console.log(persona)



const atbilde = (`Ko tu vēlies zināt par šo personu? fisrtName, lastName, age, occupation, friends`)

if(persona[atbilde]) {
    console.log(persona[atbilde])
} else {
    console.log("Nepareizs pieprāsijums!")
    persona.pilseta = "Salaspils"
persona["valsts"] = Latvija
console.log(persona)
}
