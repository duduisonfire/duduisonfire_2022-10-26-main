## Question 1

Para solucionar a questão 1 comecei configurando o range de senhas possíveis, nas variáveis minPassword e maxPassword.
Como as senhas tinha de estar entre o valor mínimo e máximo a variável minPassword começou setada com o valor 184759 + 1
e a variável maxPassword começou setada com o valor 856920 - 1.

Defini uma classe com as propriedades: actualPassword, onde já começava setada com o minPassword, allValidPassword e
allInvalidPassword, ambas inicializadas como um hashset.

Em seguida criei o método VerifyDouble, pra averiguar se a primeira condição, a saber se existiam dois números adjacentes repetidos,
para as senhas tinha sido cumprida. Neste método comecei transformando a propriedade actualPassword em uma string e fiz uma iteração 
pela propriedade actualPassword comparando os valores da direita para a esquerda, caso haja valores adjacentes iguais retorna 
true, caso não haja nenhum valor adjacente igual retorna false.

Para chegar a segunda condição de que, lido da esquerda para a direita, o número da esquerda tinha de ser menor ou igual o da direita
iterei pela propriedade actualPassword da mesma forma como fiz no método anterior comparado o número da esquerda com o da direita,
caso o da esquerda fosse maior que o dá direita retornava false, caso a iteração fosse concluída significa que a condição foi comprida
e o método retornava true.

A sequencia para contar os passwords válidos começa no método validatePassword, onde ela começa com um condicional if verificando um
short-circuit dos dois métodos anteriores. Se o resultado for verdadeiro ele adiciona o password atual dentro do hashset da propriedade
allValidPassword e passa para a próxima senha possível, se o resultado for falso ele adicionado o password atual dentro do hashset da
propriedade allInvalidPassword e passa para a próxima senha possível.

Para finalizar o algorítimo o método countValidatePassword inicia um loop while verificando se o maxPassword (a ultima senha possível),
já está contida na propriedade allValidPassword ou AllInvalidPassword, se não estiver contido ele executa o método validatePassword.
Esse método foi o que me fez escolher um hashset para comportar as senhas válidas e invalidas, pois para verificar se o maxPassword
já estava contido nas propriedades precisa fazer um busca, optei por usar o hashset pois a complexidade do algoritmo para busca é de O(1).

Por fim, para descobrir quantas senhas válidas possíveis existiam simplesmente dei um console.log(password.allValidPassword.size) que mostra
o tamanho do hashset.

Quantidade de possíveis senhas válidas: 1687.
---