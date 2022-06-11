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
      console.log(password.value);
      const response = await fetch(
        `${API_URL}/auth/change-password?token=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password.value,
          }),
        }
      );

      const data = await response.json();

      successMsg.innerHTML = "<p>Contraseña actualizada correctamente</p>";
      password.value = "";
      confirmPassword.value = "";
    } catch (error) {
      console.log(error);
      errorMsg.innerHTML = "<p>Ocurrio un error inesperado en el servidor</p>";
    }
  }

  // }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  changePassword();
});
