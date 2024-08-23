# Criptografador e Descriptografador de Textos

Este é um projeto web que permite criptografar e descriptografar textos utilizando um sistema de substituição de caracteres. O projeto também oferece a funcionalidade de copiar o texto criptografado/descriptografado para a área de transferência.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura básica do layout.
- **CSS**: Para o estilo e responsividade.
- **JavaScript**: Para a lógica de criptografia/descriptografia e manipulação do DOM.

## Funcionalidades

1. **Criptografia de Texto**: Converte as vogais do texto em substituições específicas:
   - `e` -> `enter`
   - `i` -> `imes`
   - `a` -> `ai`
   - `o` -> `ober`
   - `u` -> `ufat`

2. **Descriptografia de Texto**: Converte o texto criptografado de volta ao seu estado original.

3. **Cópia para a Área de Transferência**: Após a criptografia ou descriptografia, o usuário pode copiar o texto resultante com o clique de um botão.

4. **Interface Responsiva**: O layout ajusta-se automaticamente para telas de diferentes tamanhos, incluindo dispositivos móveis.

## Estrutura do Projeto

### HTML

O código HTML estrutura o layout da página, dividindo-a em duas colunas principais:

- **Coluna 1**: Contém o campo de entrada de texto e os botões de "Criptografar" e "Descriptografar".
- **Coluna 2**: Contém a área de exibição do texto resultante e o botão "Copiar Texto".

### CSS

O arquivo CSS define o estilo visual do projeto, incluindo:

- **Estilo Geral**: Cores, fontes, margens e paddings.
- **Layout Responsivo**: Utilização de media queries para adaptar o layout a diferentes tamanhos de tela.
- **Botões**: Estilos específicos para os botões, incluindo efeitos de hover e active.

### JavaScript

O código JavaScript lida com a lógica de criptografia e descriptografia, além de manipular o DOM para exibir os resultados e criar dinamicamente o botão de copiar.

## Como Usar

1. **Criptografar**:
   - Insira o texto desejado no campo de entrada.
   - Clique no botão "Criptografar".
   - O texto criptografado será exibido na área de resultado.

2. **Descriptografar**:
   - Insira o texto criptografado no campo de entrada.
   - Clique no botão "Descriptografar".
   - O texto original será exibido na área de resultado.

3. **Copiar Texto**:
   - Após criptografar ou descriptografar, clique no botão "Copiar Texto" para copiar o resultado para a área de transferência.

## Layout Responsivo

O layout foi projetado para ser totalmente responsivo, ajustando-se a diferentes dispositivos, como desktops, tablets e smartphones.

## Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Utilize a aplicação conforme descrito nas seções anteriores.

## Melhorias Futuras

- Adicionar suporte para caracteres especiais e acentuação.
- Implementar uma interface mais interativa com animações e transições.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

