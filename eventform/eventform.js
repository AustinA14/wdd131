
const form = document.querySelector("#eventForm");
const output = document.querySelector("#output");
const accessCodeField = document.querySelector("#accessCodeField");
const studentIDField = document.querySelector("#studentIDField");

accessCodeField.style.display = "none";
studentIDField.style.display = "none";

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.type.addEventListener("change", (event) => {
    if(event.target.value === "student") {
        accessCodeField.style.display = "none";
        studentIDField.style.display = "";
        form.accessCode.required = false;
        form.studentID.required = true;
    } else if (event.target.value === "guest") {
        studentIDField.style.display = "none";
        accessCodeField.style.display = "";
        form.accessCode.required = true;
        form.studentID.required = false;
    }
});

form.addEventListener("submit", function (event) {
    console.log("submit fired")
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.type.value;
    const eventDate = form.eventDate.value;
    
    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }
    if (type == "student") {
        if (form.studentID.value.length != 9) {
            output.textContent = "Student I# must be 9 digits.";
            return;
        }
    }

    if (type == "guest") {
        if (form.accessCode.value != "EVENT131") {
            output.textContent = "Please enter a valid access code.";
            return;
        }
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
});