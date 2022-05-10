const btn = document.querySelector("#btn");
const API_URL = "https://buukapi.herokuapp.com/api/v1"


async function changePassword() {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmpassword")
    const errorMsg = document.querySelector("#errormsg")
    if (password === "" || confirmPassword === "") {
        errorMsg = "Este campo es obligatorio"
    } else if (password !== confirmPassword) {
        errorMsg = "Las contraseñas no coinciden"
    }

    // const response = await fetch(`${API_URL}/forgot-password`);
    // const data = await response.json();
    // console.log(data)

}

btn.addEventListener("click", (e) => {


    e.preventDefault()
    // errorMsg.textContent = "Error"
    changePassword()
})