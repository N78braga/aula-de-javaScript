/**
 * Função geradoras 
 * O que é uma função geradora
 * E uma função que práticamente realiza pequenos intervalos no código
 * deixando o código meu que preguiçoso pusando  código. 
 * Exemplo
 * 
 * function* geradora1() {
 *   //Código qualquer ...
 *   yield 'Valor 1';
 *   //Código qualquer ...
 *   yield 'Valor 2';
 *   //Código qualquer ...
 *    yield 'Valor 3';
 * }
 * 
 * const g1 = geradora1();
 * console.log(g1.next().value);// Mostrando só o valor que está dentro da função geradora
 * console.log(g1.next().value);
 * //console.log(g1.next());// Mostrando à função geradora
 * 
 * Trabalhando com a iteração em funções geradoras
 * 
 * function* geradora1() {
 *    /Código qualquer ...
 *    yield 'Valor 1';
 *    /Código qualquer ...
 *    yield 'Valor 2';
 *    /Código qualquer ...
 *    yield 'Valor 3';
 * }
 * 
 * const g1 = geradora1();
 * for(let valor of g1){
 *   console.log(valor);
 * }
 * 
 * 
 * Exemplo de função geradora infinita
 * 
 * function* geradora2()
 *   let i = 0;
 *   
 *   while(true){
 *   yield i;
 *   i++;
 *   }
 * }
 * 
 * 
 * Outro exemplo em que uma função geradora chama outra função geradora
 * 
 * function* geradora3(){
 *    yield 0;
 *    yield 1;
 *    yield 2;
 * }
 * 
 * function* geradora4(){
 * yield* geradora3();
 *    yield 3;
 *    yield 4;
 *    yield 5;
 * }
 * 
 * const g4 = geradora4();
 * for(let valor of g4){
 *   console.log(valor);
 * }
 */

function* geradora3(){
        yield 0;
        yield 1;
        yield 2;
     }
     
     function* geradora4(){
     yield* geradora3();
        yield 3;
        yield 4;
        yield 5;
     }
     
     const g4 = geradora4();
    
     function* geradora5(){
        yield function(){
            console.log('Vim do y1');
        };

        //...

        yield function(){
            console.log('Vim do y2');
        };
     }

     const g5 = geradora5();
     const func1 = g5.next().value;
     const func2 = g5.next().value;

     func1();
     func2();