const btn = document.querySelector("#btn");
const API_URL = "http://localhost:3080/api/v1";

async function changePassword() {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmpassword");
  const errorMsg = document.querySelector("#errormsg");
  const successMsg = document.querySelector("#successmsg");
  let hasError = false;
  errorMsg.innerHTML = "";

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
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
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
  password.value = "";
  confirmPassword.value = "";

  // const response = await fetch(`${API_URL}/forgot-password`);
  // const data = await response.json();
  // if (data) {

  // }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  changePassword();
});
