//1
document.getElementById("gui")
let NomeDaPessoa = document.getElementById("gui");
let texto = document.getElementById("textoEnvio");

function Enviar()
{
    texto.innerHTML = "Óla " + NomeDaPessoa.value + " tudo bem?" ;
}
//2
let conversao = document.getElementById("conversão");
let gui = document.getElementById("Resultado")
let  converter = document.getElementById("converter");

function Resultado()
{
    converter.innerHTML = "" + parseInt(conversão.value) /100
}

//3
let maior = document.getElementById("caixa1");
let menor = document.getElementById("caixa2");
let defina = document.getElementById("conteudo");

function reza()
{
    if(maior.value <= menor.value )
        {
            defina.innerHTML = "O maior valor é " + menor.value
            
        }
    else
        {
            defina.innerHTML = "O maior valor é " + maior.value
        }
}

//4
let v1 = document.getElementById("numero")
let  Sucessor = document.getElementById("Sucessor")
let p1 = document.getElementById("p1")
let Antecessor =  document.getElementById("Antecessor")

function calcular()
{
    Sucessor.innerHTML = parseInt(v1.value) + 1;
    p1.innerHTML = " Sucessor " + numero.value +" antecessor"
    Antecessor.innerHTML = parseInt(v1.value) - 1;
}

//6
let a = document.getElementById("salario");
let  = document.getElementById("aumento");
let v = document.getElementById("porcento");

function aumento()
{
    if(a.value > 1250)
        {
            v.innerHTML = "você recebeu " + ((parseInt(a.value)+ a.value *10/100  )) 
        }
    else
        {
            v.innerHTML = "você recebeu " + ((parseInt(a.value) + a.value *15/100)) 
        }
}

//7
var c = 1;
while(c <= 100)
    {
        console.log(c)
        c = c + 1;
    }
//8
var c = 0;
    while(c <= 50)
        {
            console.log(c)
            c = c + 5;
        }

//9
y = 100
while( y>= 0 ) 
   {
       console.log(y)
       y = y -10;
   }
