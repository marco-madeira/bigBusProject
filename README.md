# bigBusProject

Para conseguir rodar localmente esse projeto algumas etapas são requeridas.

1: Para povoar o banco é necessario utilizar o script.sql. Como o backend está configurado para postgres, caso o usuario queira rodar em outros SGBD'S, deve-se adicionar a dependecy no arquivo pom.xml que está dentro da pasta bigBusBack.

2.Ainda na pasta bigBusBack, procurar por application.properties(bigBusBack/source/main/resource), e configure os dados de conexão ao banco.

3.Execute o programa e veja se não é retornado nenhum erro. Caso ainda não seja possível executar o programa, verifique se o JDK está instalado.

4.No bigBusFront vá ate a paste de nome bigBus e abra um terminal. Execute npm install para instalar todas as dependencias do projeto. Após execute npm run dev. É necessario ter node.js instalado em sua máquina.

Seguindo esses passos deve ser possivel executar todo o programa.

