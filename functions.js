            
            function numeros(){
                for(var i = 0; i <= 50; i++){
                    console.log(i);
                }
                    console.log("***************************");
                for(var i = 0; i <= 50; i++){
                    console.log(i);
                }
            }
            
            function nomes(){
               for(var i = 0; i <= 2; i++){
                    var a = document.write("Pedro");
                    for(var j = 0; j <= 2; j++){
                        document.write("CEP");
                    }
                        document.write("<br/>");
                }
            }
            
            function numeros2(){
                for(var i = 0; i <=60; i++){
                    if(i % 3 == 0){
                        console.log(i+"***");
                    }else{
                        console.log(i+"*");
                    }
                }
            }
            
            function numeros3(){
                for(var i = 0; i <=80; i++){
                    if(i % 3 == 0 && i % 6 == 0){
                        console.log("*");
                    }else{
                        console.log(i);
                    }
                }
            }
            
            function triangulo(){
                for(var i = 0; i < 5; i++){
	
		for(var o = 0; o <= i ; o++){
		
			document.write("*");
		
		}
		
		document.write("<br />");
		
                }
            }
            
            function Fibonacci(){
                var n1 = 0;
                var n2 = 1;

                for(i = 1; i <= 20; i++){
                    document.write(n1,n2);
                    n1 += n2;
                    n2 += n1;
                }
            }
            
            function numeros4(){
                var meuArray = [];

                for(var i = 1; i <= 10; i++){
                meuArray[i] = prompt ("digite um valor:");
            }
                meuArray.sort(function(a, b){return a-b});
                alert(meuArray);
            }
            
            function numeros5(){
                var valor = prompt('Digite o numero');
	
		var array = valor.split(''); 
		var tamArray = array.length; 
		var total = 0;
		
		for(var i = 0; i < tamArray; i++){
		
			total = parseInt(array[i]) + parseInt(total);
			
		
		}
		
		alert(total);
            }
            
            function numeros6(){
                var n1 = prompt("Valor 1:");
                var n2 = prompt("Valor 2:");
                var aux = n1;

                if(n1 <= n2){
                    for(var i = n1; i <= n2; i++){
                    document.write(i);
                    }
                }else{
                    for(var i = n1; i > n2; i--){
                        document.write(i);
                    }
                }
            }
            
            function calc(){
                var salario = prompt("Salario Bruto: ");

                if(salario <= 1.556,94){
                    var por = (salario*8.00)/100;
                    var res = salario-por;
                    alert("Salário Líquido: " + res);
                }else if(salario >= 1.556,95 || salario == 2.594,92){
                    var por = (salario*9.00)/100;
                    var res = salario-por;
                    alert("Salário Líquido: " + res);
                }else{
                    var por = (salario*11.00)/100;
                    var res = salario-por;
                    alert("Salário Líquido: " + res);
                }
            }