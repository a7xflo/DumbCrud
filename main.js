let form = document.getElementById("form");
let nameInput = document.getElementById("nameInput");
let amountInput = document.getElementById("amountInput");
let notesInput = document.getElementById("notesInput");
let msg = document.getElementById("msg");
let products = document.getElementById("products");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (nameInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Name darf nicht leer sein";
    }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss","modal");
        add.click();
    }
}

let data = {};

let acceptData = () => {
    data["name"] = nameInput.value;
    data["amount"] = amountInput.value;
    data["notes"] = notesInput.value;

    createProducts();
};

let createProducts = () => {
    products.innerHTML += ` 
    <br>     
    <br> 
          <div>
            <span class="fw-bold">${data.name}</span>
            <br>
                <span>${data.amount}</span>
                <p class="small text-secondary">${data.notes}</p>
                <span class="options">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash-alt"></i>
                </span>
        </div>
    `;

    resetForm();
}

let resetForm = () => {
    nameInput.value = "";
    amountInput.value = "";
    notesInput.value = "";
}