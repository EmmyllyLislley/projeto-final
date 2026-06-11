**Instituto Federal de Alagoas \- Campus Maceió**  
**Disciplina:** Programação Orientada a Objetos (POO)  
**Professor:** Ricardo Rubens  
**Alunos:** Daniel Menezes Nascimento, Emmylly Lislley, Hellen Renyelle  
**Projeto Final \- LEIAME.md**

**Funções de cada participante:**

* Emmylly Lislley:   
  Confecção estrutural e de grande parte dos Models, DAOs, Controllers, Service e connectionFactory;  
  Modelagem no Diagrama de Classes;  
  Atualização do sistema com `async()` e `await()`  
    
* Daniel Menezes:  
  Auxílio na confecção teórica das classes utilizadas e funções a serem implementadas;  
  Confecção inicial de parte dos DAOs (avaliação, diretor, e ator);  
  Ajustes na estrutura de pastas;  
    
* Hellen Renyelle:  
  Desenvolvedora do Frontend do Cinelog, idealizadora das funcionalidades e implementação de JWT e cookies.

**1\. Faça um breve comentário sobre a utilização no projeto de Orientação Objetos e suas características.**  
A utilização de programação orientada a objetos foi essencial para o funcionamento, organização e gerenciamento de dados do projeto. Cada entidade possui um model, um controller, um DAO e um service.

**2\. Faça um breve comentário sobre como foi realizada a conexão com o banco de dados utilizando o pacote mysql, o padrão DAO e orientação a objetos.**  
A conexão com o banco de dados utilizando o pacote mysql permitiu a execução das funcionalidades do projeto, como por exemplo cadastros, consultas, atualizações e remoção de dados. Foi utilizado o padrão DAO para o acesso ao banco de dados, fazendo a separação de camadas e concentrando todo o SQL no DAO. A orientação a objetos permitiu a utilização de classes para representar entidades, DAOs, serviços e controladores. Permitindo o encapsulamento de dados e a reutilização de código.

**3\. Há algum problema/erro identificado?**  
A comunicação inicial entre o banco de dados e os DAOs para a criação das tabelas necessárias automaticamente mostrou algumas inconsistências, e a comunicação entre o controller e o frontend não funcionou como esperado, impedindo que os dados inseridos no site pelo usuário fossem gravados no banco.

**4\. Descreva sua experiência em realizar o projeto e as dificuldades encontradas**  
O uso do Git pelos três colaboradores foi uma dificuldade iminente. Por alterações locais não commitadas, o andamento do projeto foi comprometido ao não conseguirmos mantê-lo atualizado conforme os colaboradores alteravam o código. Com o desenrolar do projeto, ganhamos aptidão para realizar commits coerentes, gerenciar quais arquivos devem ser commitados ou não, como puxar atualizações e enviar atualizações ao GitHub.  
