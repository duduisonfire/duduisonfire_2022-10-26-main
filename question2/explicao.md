## Question 2

Para solucionar a questão 2 comecei importando o 'FS' do NodeJS para poder ler o arquivo 'commands.txt' que continham todas os códigos de
instruções especificados nas questões.

Criei uma classe com as propriedades file, inicializada com um novo array. E a propriedade address, inicializada com o valor '0', pois era
o valor inicial do endereço especificado na questão. Em seguida o método readFile le o arquivo 'commands.txt' e coloca num array de string
separado por linhas e o atribui na propriedade file.

O método executeFile executa o método readFile, em seguida inicializa a variável 'command' e começa a iterar pelo arquivo (agora inserido
na propriedade 'file' da classe). Se a string atual começa com '5' ela passa para dentro da variável 'command' o valor da string, ignorando
o primeiro character (o '5'), faz parse para um Number do valor contido na instrução, diminui de 1 (pois a cada passagem da iteração ela soma 
+1 ao index) e adiciona este valor ao 'index' da iteração, fazendo ele pular a quantidade de instruções necessárias. Caso a string comece com
'20' ela passa para dentro da variável 'command' ignorando os dois primeiros characters (o '2' e o '0'), faz um parse para Number e adiciona
esse valor na propriedade address da classe, no final da iteração retorna o valor da propriedade address

Por fim o método getAddress executa o método executeFile e dá um console.log(address) para mostrar o valor final do endereço depois de executada
todas as instruções do arquivo 'command.txt'.

Valor final da variável de endereço = 670.
---