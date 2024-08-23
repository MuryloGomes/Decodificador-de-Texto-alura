//variaveis
const textarea = document.getElementById('textoresultado');
const inputElement = document.getElementById('texto_input');
const Criptografar = document.getElementById('btnCriptografar');
const Descriptografar = document.getElementById('btnDescriptografar');

//deixando a textarea de resultado oculta, para nao atrapalhar meu flebox
document.getElementById('textoresultado').style.display = "none";

//função para criptografar
function criptografar() {
  const valorInput = document.getElementById('texto_input').value;
  const substituicoes = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };

    return valorInput.replace(/[eiaou]/g, letra => substituicoes[letra]);
}

//função para descriptografar
function descriptografar() {
  const textooriginal = document.getElementById('texto_input').value;
  const voltando = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  return textooriginal.replace(/enter|imes|ai|ober|ufat/g, letra => voltando[letra]);
}

//Joga o resultado do botao criptografar para o textarea de resultado
function processarTexto() {
  const valor = inputElement.value;
  if (valor.trim()) { // Verifica se o campo de entrada não está vazio
      const textoCriptografado = criptografar();
      textarea.value = textoCriptografado;
  }
}

//Joga o resultado do botao descriptografar para o textarea de resultado
function processarTextoDescriptografado() {
  const valores = inputElement.value;
  if (valores.trim()) { // Verifica se o campo de entrada não está vazio
      const textoDecodificado = descriptografar();
      textarea.value = textoDecodificado;
  }
}

function copiarTexto() {
  // Seleciona a textarea correta
  let textoResultado = document.getElementById("textoresultado").value;

  // Copia o texto da textarea para a área de transferência
  navigator.clipboard.writeText(textoResultado).then(() => {
      //alert("Texto copiado para a área de transferência!");
  }).catch(err => {
      alert("Falha ao copiar o texto: " + err);
  });
}

function criarBotaoCopiar() {
  // Verifica se o botão já existe
  let botaoExistente = document.getElementById("btnCopiar");
  if (!botaoExistente) {
      // Cria o novo botão
      let botaoCopiar = document.createElement("button");
      botaoCopiar.id = "btnCopiar";
      botaoCopiar.textContent = "Copiar Texto";
      
      // Adiciona o evento de clique para copiar o texto
      botaoCopiar.onclick = copiarTexto;
      
      // Insere o novo botão na div especificada
      document.getElementById("coluna_2_botao").appendChild(botaoCopiar);
  } else {
      // Atualiza o botão existente (se necessário)
      botaoExistente.textContent = "Copiar Texto";
  }
}

//Oculta os elementos que atrapalha o resultado
function ocultarElemento() {
  document.querySelector('.antes').style.display = 'none';
  document.getElementById('textoresultado').style.display = "block";
}

//Colocando as funçoes nos botoes
Criptografar.addEventListener('click', ocultarElemento);
Criptografar.addEventListener('click', processarTexto);
Criptografar.addEventListener('click', criarBotaoCopiar);

Descriptografar.addEventListener('click', processarTextoDescriptografado);
Descriptografar.addEventListener('click', criarBotaoCopiar);