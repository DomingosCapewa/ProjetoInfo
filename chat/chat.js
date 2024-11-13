document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  document.getElementById("send-btn").addEventListener("click", sendMessage);
});

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (message) {
    addUserMessage(message);
    userInput.value = "";
    setTimeout(() => {
      const response = getResponse(message);
      addBotMessage(response);

      // Após a resposta do bot, envia uma mensagem padrão após 20 segundos
      setTimeout(() => {
        addBotMessage("Posso ajudar com algo mais?");
      }, 20000); // 20 segundos após a resposta do bot
    }, 1000); // Tempo de resposta do bot
  }
}

function addUserMessage(message) {
  const chatBox = document.getElementById("chat-box");
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");

  const icon = document.createElement("img");
  icon.src = "https://img.icons8.com/ios-filled/50/000000/user.png"; // Ícone do usuário
  icon.classList.add("icon");

  userMessage.appendChild(icon);
  userMessage.appendChild(document.createTextNode(message));

  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
  const chatBox = document.getElementById("chat-box");
  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot-message");

  const icon = document.createElement("img");
  icon.src = "https://img.icons8.com/ios-filled/50/000000/bot.png"; // icone do bot
  icon.classList.add("icon");

  const loadingDots = document.createElement("span");
  loadingDots.textContent = "...";
  loadingDots.style.marginRight = "10px"; // espaço entre os pontos e o texto
  botMessage.appendChild(loadingDots);

  chatBox.appendChild(botMessage); // adiciona a mensagem ao chat
  chatBox.scrollTop = chatBox.scrollHeight;

  // mostra os pontos antes da resposta???? verificar
  setTimeout(() => {
    loadingDots.remove(); // remove os pontos
    let index = 0;
    const typingEffect = setInterval(function () {
      if (index < message.length) {
        botMessage.appendChild(document.createTextNode(message[index]));
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50); // tempo de digitação para cada letra
  }, 1000); // espera 1 segundo para mostrar os pontos
}

function getResponse(message) {
  const responses = {
    pilhas:
      "Pilhas contêm substâncias tóxicas e não devem ser descartadas no lixo comum. O ideal é levá-las a pontos de coleta específicos, como supermercados ou centros de reciclagem de eletrônicos. Lembre-se de armazená-las em um recipiente seguro até o descarte. Descarte com consciência no ponto de descarte mais perto de você!",

    "cigarro eletrônico":
      "Cigarros eletrônicos contêm baterias de lítio e componentes eletrônicos que precisam ser descartados corretamente. Para fazer isso, desmonte o dispositivo removendo a bateria e outras peças eletrônicas. Leve essas partes para um ponto de coleta de lixo eletrônico. Descarte com consciência no ponto de descarte mais perto de você!",

    telefone:
      "Para descartar um telefone antigo, o ideal é remover a bateria, cartão SIM e outros componentes. Verifique se a bateria pode ser reciclada separadamente e, em seguida, leve todas as peças a um centro de reciclagem de eletrônicos. Descarte com consciência no ponto de descarte mais perto de você!",

    mouse:
      "Para descartar um mouse, você pode desmontá-lo, separando a parte eletrônica do plástico. As partes eletrônicas devem ser levadas para centros de reciclagem de eletrônicos, enquanto as partes plásticas podem ser recicladas se o material for apropriado. Descarte com consciência no ponto de descarte mais perto de você!",

    carregador:
      "Carregadores são compostos de fios de cobre e plástico, ambos recicláveis. Leve-os a um ponto de coleta de lixo eletrônico. Se o cabo estiver danificado, tente separá-lo dos conectores para facilitar o processo de reciclagem. Descarte com consciência no ponto de descarte mais perto de você!",

    teclado:
      "Teclados podem ser desmontados para separar as partes plásticas e eletrônicas. Remova as teclas e o cabo (se for com fio), e leve tanto as partes eletrônicas quanto o plástico para pontos de coleta de eletrônicos. As teclas de plástico podem ser recicladas dependendo do tipo de material. Descarte com consciência no ponto de descarte mais perto de você!",

    default:
      "Por favor, procure por centros de reciclagem locais ou pergunte sobre um item específico. Descarte com consciência no ponto de descarte mais perto de você!",
  };

  // verifica se alguma palavrachave esta presente na mensagem do usuário
  for (const key in responses) {
    if (message.toLowerCase().includes(key)) {
      return responses[key];
    }
  }

  return responses["default"]; // se nenhuma palavra-chave for encontrada
}
function goBack() {
  window.history.back();
}
