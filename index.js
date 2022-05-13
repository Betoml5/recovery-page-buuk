const btn = document.querySelector("#btn");
const API_URL = "http://localhost:3080/api/v1";

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
//Este token tiene una expiracion de 15 min
var token = url.searchParams.get("token");

async function changePassword() {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmpassword");
  const errorMsg = document.querySelector("#errormsg");
  const successMsg = document.querySelector("#successmsg");
  let hasError = false;
  errorMsg.innerHTML = "";
  successMsg.innerHTML = "";

  if (password.value === "" || confirmPassword.value === "") {
    errorMsg.innerHTML += "<p>Hay algunos campos sin completar</p>";
    hasError = true;
  }

  if (password.value !== confirmPassword.value) {
    errorMsg.innerHTML += `<p>Las contraseñas no coinciden </p>`;
    hasError = true;
  }

  if (hasError === false) {
    try {
      const response = await fetch(`${API_URL}/user/update`, {
        method: "POST",
      });
      const data = await response.json();

      console.log(data);
      successMsg.innerHTML = "<p>Contraseña actualizada correctamente</p>";
      password.value = "";
      confirmPassword.value = "";
    } catch (error) {
      errorMsg.innerHTML = "<p>Ocurrio un error inesperado en el servidor</p>";
    }
  }

  // const response = await fetch(`${API_URL}/forgot-password`);
  // const data = await response.json();
  // if (data) {

  // }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  changePassword();
});
