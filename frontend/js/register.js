const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const age = document.getElementById("age").value;
  const favoriteGenre = document.getElementById("favoriteGenre").value;
  const terms = document.getElementById("terms").checked;

  const error = document.getElementById("error");

  error.textContent = "";

  if (username.length < 3) {
    error.textContent = "Nome muito curto";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Email inválido";
    return;
  }

  if (password.length < 6) {
    error.textContent = "A senha deve ter pelo menos 6 caracteres";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "As senhas não coincidem";
    return;
  }

  if (!terms) {
    error.textContent = "Aceite os termos";
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          age,
          favoriteGenre
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      error.textContent = data.erro;
      return;
    }

    alert("Cadastro realizado!");

    window.location.href = "index.html";

  } catch {
    error.textContent = "Erro ao conectar ao servidor";
  }

});