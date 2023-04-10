const persons = [
  {
    id: 1,
    nom: "Elisa",
    prenom: "Valadaresse",
    telephone: 778863195,
    email: "elisa@gmail.com",
    montant: 100000,
    image:
      "https://images.unsplash.com/photo-1677181517674-18fa686d5eac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    transactions: [
      { numero: 1, date: "2021-01-01", sens: 1, montant: 1000 },
      { numero: 2, date: "2021-01-02", sens: 1, montant: 2000 },
      { numero: 3, date: "2021-01-03", sens: 1, montant: 3000 },
      { numero: 4, date: "2021-01-04", sens: 1, montant: 4000 },
    ],
  },
  {
    id: 2,
    nom: "Sephoraine",
    prenom: "Leblanc",
    telephone: 772293197,
    email: "sephoraine@gmail.com",
    montant: 200000,
    image:
      "https://images.unsplash.com/photo-1678188575046-4cad367dd8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    transactions: [
      { numero: 5, date: "2021-02-01", sens: 1, montant: 1000 },
      { numero: 6, date: "2021-01-02", sens: 1, montant: 2000 },
      { numero: 7, date: "2021-01-03", sens: 1, montant: 3000 },
      { numero: 8, date: "2021-01-04", sens: -1, montant: 4000 },
      { numero: 9, date: "2021-01-04", sens: 1, montant: 4000 },
    ],
  },
  {
    id: 3,
    nom: "Rica",
    prenom: "Angel",
    telephone: 779801810,
    email: "rica@gmail.com",
    montant: 300000,
    image:
      "https://images.unsplash.com/photo-1676824442274-4acbea1eb191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    transactions: [
      { numero: 10, date: "2021-03-01", sens: 1, montant: 1000 ,},
      { numero: 11, date: "2021-01-02", sens: -1, montant: 2000 },
      { numero: 12, date: "2021-01-03", sens: 1, montant: 3000 },
      { numero: 13, date: "2021-01-03", sens: 1, montant: 3000 },
    ],
  },
  {
    id: 4,
    nom: "Akisa",
    prenom: "Elfie",
    telephone: 777320581,
    email: "akisa@gmail.com",
    montant: 400000,
    image:
      "https://images.unsplash.com/photo-1677261905060-7a93f54682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    transactions: [
      { numero: 14, date: "2021-01-01", sens: -1, montant: 1000 },
      { numero: 15, date: "2021-01-02", sens: 1, montant: 2000 },
    ],
  },
];
const nom = document.getElementById("lastname");
const prenom = document.getElementById("firstname");
const telephone = document.getElementById("phone");
const email = document.getElementById("email");
const btnNext = document.querySelector(".next");
const image = document.querySelector("#image");
const content = document.querySelector(".content");
const title = document.querySelector(".title");
let tbody = content.querySelector("tbody");
let span = title.querySelector("code");
let select = document.querySelector("#trans");
let btnSave = document.querySelector(".save");
let montant = document.querySelector(".from-control");
let div1 = document.createElement("div");
const inputNumero = document.querySelector(".control-numero");
let error = document.querySelector(".error");
let btnPlus = document.querySelector(".btn-detail");
let form = document.querySelector(".form");
let searchDiv = document.querySelector(".search-div");
const eyes = document.querySelector(".fa-eye");
const modalContainer = document.querySelector(".modal-container");
const nomModale = document.querySelector("#nom-modal");
const prenomModale = document.querySelector("#prenom-modal");
const telephoneModale = document.querySelector("#telephone-modal");
const emailModale = document.querySelector("#email-modal");
const imageModale = document.querySelector("#photo-modal");
const montantModale = document.querySelector("#montant-modal");
const btnModale = document.querySelector(".modal");
const btnClose = document.querySelector(".cancel");
const saveModale = document.querySelector(".save-modal");
let indexPerso = 0;
let lastTransaction = 16;

//afficher premier personne par defaut

function displayPerson() {
  const person = persons[indexPerso];
  nom.innerHTML = person.nom;
  prenom.innerHTML = person.prenom;
  telephone.innerHTML = person.telephone.toString();
  email.innerHTML = person.email;
  image.setAttribute("src", person.image);
  span.innerHTML = person.transactions.length.toString();
  div1.innerHTML = person.montant.toString() + " FCFA";
  title.appendChild(div1);
  tbody.innerHTML = "";
  person.transactions.forEach((transaction) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let icon = document.createElement("i");
    td1.innerHTML = transaction.numero.toString();
    td2.innerHTML = transaction.date;
    if (transaction.sens == 1) {
      td3.style.color = "green";
      td3.innerHTML = "Depot";
    } else if (transaction.sens == -1) {
      td3.style.color = "red";
      td3.innerHTML = "Retrait";
    } else if (transaction.sens == 0) {
      td3.style.color = "blue";
      td3.innerHTML = "Annuler";
    }
    if (transaction.sens == -1) {
      icon.classList.add("fa-solid", "fa-trash");
      td5.appendChild(icon);
      td5.addEventListener("click", () => handleCancel(transaction.numero));
    }
    td4.innerHTML = transaction.montant.toString();
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);
  });
}

function handleNext() {
  indexPerso = Math.floor(Math.random() * persons.length);
  displayPerson();
}

btnNext.addEventListener("click", handleNext);
displayPerson();

function addMontant(e) {
  let option = e.target.value;
  let montant = document.querySelector(".from-control");
  if (option == "1") {
    montant.setAttribute("placeholder", "montant du depot");
  } else if (option == "-1") {
    montant.setAttribute("placeholder", "montant du retrait");
  }
}
select.addEventListener("change", addMontant);

function handleSave() {
  //calculer les transactions duc client sens 1 = depot et sens -1 = retrait
  let sens = select.value;
  let montant = document.querySelector(".from-control").value;
  if (montant === "") {
    return;
  }
  let date = new Date().toISOString().slice(0, 10);
  let numero = lastTransaction ++;
  if (inputNumero.value == "") {
    let transaction = { numero, date, sens, montant };
    persons[indexPerso].transactions.push(transaction);
  }
  //calculer le nouveau montant du client
  let value = select.value;
  if (value == 1 && inputNumero.value == "") {
    persons[indexPerso].montant += parseInt(montant);
  } else if (value == -1 && inputNumero.value == "") {
    persons[indexPerso].montant -= parseInt(montant);
  }
  displayPerson();
}
btnSave.addEventListener("click", handleSave);
//fonction de transfert par numero de telephone
function handleTransfer() {
  if (inputNumero.value !== "" && montant.value !== "") {
    let numero = inputNumero.value;
    let montant = parseInt(document.querySelector(".from-control").value);
    let indexExp = indexPerso;
    let indexRec = persons.findIndex((person) => person.telephone == numero);
    let date = new Date().toISOString().slice(0, 10);

    if (montant > persons[indexExp].montant) {
      error.innerHTML = "solde insuffisant";
      setTimeout(() => {
        error.innerHTML = "";
      }, 3000);
      return;
    }

    if (indexRec != -1) {
      persons[indexRec].montant += montant;
      let numeroRec = persons[indexRec].transactions.length + 1;
      let transactionRec = {
        numero: numeroRec,
        date: date,
        sens: 1,
        montant: montant,
      };
      persons[indexRec].transactions.push(transactionRec);// Ajouter la transaction de retrait de la personne qui envoie
      persons[indexExp].montant -= montant;
      let numeroExp = persons[indexExp].transactions.length + 1;
      let transactionExp = {
        numero: numeroExp,
        date: date,
        sens: -1,
        montant: montant,
        numeroRec: persons[indexRec].telephone,
      };
      persons[indexExp].transactions.push(transactionExp); // Ajouter la transaction de dépôt de la personne qui reçoit
    } else if(indexRec == -1 ) {
      persons[indexExp].montant -= montant;
      let numeroExp = persons[indexExp].transactions.length + 1;
      let transactionExp = {
        numero: numeroExp,
        date: date,
        sens: -1,
        montant: montant,
      };
      persons[indexExp].transactions.push(transactionExp);
      setTimeout(() => {
        persons[indexExp].transactions.pop();
        persons[indexExp].montant += montant;
        let date = new Date().toISOString().slice(0, 10);
        let numeroExp = persons[indexExp].transactions.length + 1;
        let transactionExp = {
          numero: numeroExp,
          date: date,
          sens: 0,
          montant: montant,
        };
        persons[indexExp].transactions.push(transactionExp);
        displayPerson();
      }, 3000);
    }

    displayPerson();
  }
}
btnSave.addEventListener("click", handleTransfer);
function showDetail() {
  form.classList.toggle("hide");
}
btnPlus.addEventListener("click", showDetail);
//fonction de recherche du numero correspondant
function handleSearch() {
  searchDiv.style.display = "block";
  searchDiv.innerHTML = "";
  let numero = inputNumero.value;
  let resultat = persons.filter(
    (person) => person.telephone.toString().search(numero) != -1
  );
  resultat.forEach((index) => {
    let div = document.createElement("div");
    div.innerHTML = index.nom + " " + index.prenom + " " + index.telephone;
    div.addEventListener("click", () => {
      inputNumero.value = index.telephone;
      searchDiv.innerHTML = "";
      searchDiv.style.display = "none";
    });
    if (inputNumero.value == "") {
      searchDiv.innerHTML = "";
      searchDiv.style.display = "none";
    }

    searchDiv.appendChild(div);
  });
}
inputNumero.addEventListener("input", handleSearch);
//fonction de recherche du numero correspondant
function handleEye() {
  let numero = inputNumero.value;
  let index = persons.findIndex((person) => person.telephone == numero);
  if (index == -1) {
    error.innerHTML = "numero de telephone invalide";
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
    return;
  }
  indexPerso = index;
  displayPerson();
}
eyes.addEventListener("click", handleEye);
//fonction d'ajout de client
function handleAdd() {
  let nom = nomModale.value;
  let prenom = prenomModale.value;
  let telephone = telephoneModale.value;
  let montant = montantModale.value;
  let email = emailModale.value;
  let image = imageModale.value;
  let transactions = [];
  let client = { nom, prenom, telephone, montant, email, image, transactions };
  if (
    nom == "" ||
    prenom == "" ||
    telephone == "" ||
    montant == "" ||
    email == "" ||
    image == ""
  ) {
    return;
  }
  persons.push(client);
  console.log("click");
  showModale();
}
saveModale.addEventListener("click", handleAdd);
function showModale() {
  modalContainer.classList.toggle("hide");
}
btnModale.addEventListener("click", showModale);
btnClose.addEventListener("click", showModale);

function handleCancel(indexNumero) {
  let date = new Date().toISOString().slice(0, 10);
  for (let i = 0; i < persons[indexPerso].transactions.length; i++) {
    let sens = persons[indexPerso].transactions[i].sens;
    let montant = persons[indexPerso].transactions[i].montant;
    let numero = persons[indexPerso].transactions[i].numeroRec;
    if(persons[indexPerso].transactions[i].numero == indexNumero){
      
    if (numero !== undefined) {
      let indexRec = persons.findIndex((person) => person.telephone == numero);

        persons[indexPerso].montant += montant;
        persons[indexPerso].transactions.push({
          numero: lastTransaction++,
          date: date,
          sens: 0,
          montant: montant,
        });
       if (persons[indexRec].montant >= montant) {
        persons[indexRec].montant -= montant;
        persons[indexRec].transactions.push({
          numero: lastTransaction++,
          date: date,
          sens: 0,
          montant: montant,
        });
       }
       else{
        alert("le recepteur n'a pas assez d'argent");
        return;
       }
    }
    if (numero == undefined && sens == -1) {
      persons[indexPerso].montant += parseInt(montant);
      persons[indexPerso].transactions.push({
        numero: lastTransaction++,
        date: date,
        sens: 0,
        montant: montant,
      });
    }
    }

  }
  for (let i = 0; i < persons[indexPerso].transactions.length; i++) {
    if (persons[indexPerso].transactions[i].numero == indexNumero) {
      persons[indexPerso].transactions.splice(i, 1);
    }
  }
  displayPerson();
}

// function handleDelete() {
//   persons.splice(indexPerso, 1);
//   indexPerso = Math.floor(Math.random() * persons.length);
//   displayPerson();
// }
// btnDelete.addEventListener("click", handleDelete);
