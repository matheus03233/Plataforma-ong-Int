// assets/js/form.js

function validarCPF(cpf) {
  const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  return re.test(cpf);
}

function initFormValidation() {
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("formMsg");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();

    const erros = [];

    if (nome.length < 3) {
      erros.push("Nome muito curto.");
    }
    if (!email.includes("@")) {
      erros.push("E-mail inválido.");
    }
    if (!validarCPF(cpf)) {
      erros.push("CPF deve estar no formato 000.000.000-00.");
    }

    if (erros.length > 0) {
      msg.textContent = erros.join(" ");
      msg.style.color = "red";
      msg.style.fontWeight = "600";
      return;
    }

    const cadastro = {
      nome,
      email,
      cpf,
      data: new Date().toISOString()
    };

    const cadastros = JSON.parse(localStorage.getItem("cadastrosONG") || "[]");
    cadastros.push(cadastro);
    localStorage.setItem("cadastrosONG", JSON.stringify(cadastros));

    msg.textContent = "Cadastro enviado com sucesso! ✅";
    msg.style.color = "green";
    msg.style.fontWeight = "600";

    form.reset();
  });
}

window.FormValidator = {
  init: initFormValidation
};
