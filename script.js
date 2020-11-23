// funcao entrar

function entrar(){

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente, por favor!');
        area.innerHTML = 'Bem vindo,';
    }
    else{
        area.innerHTML = 'Bem vindo, ' + texto;
    }

}

function entrar2(nome){

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome');
    area.innerHTML = nome + "" + texto;

}

function entrar3(sobrenome){

    var area = document.getElementById('area3');
    var texto = prompt('Digite sua idade');
    area.innerHTML = sobrenome + "" + texto;
}

//variavel lista
var lista =["Mateus", "Lucas", "Henrique", "15"]

if(lista.indexOf("Mateus")>-1){
    alert("Este item esta na lista!");
}else{("Não encontrado!");
}

//12.trabalhando com loops
//while= Enquanto
x = 0;
while(x < 10){
    document.write("</br> O valor do X: " + x);
    x++;
}

x=5;
document.write("</br></br></br> O valor de X esta valendo: " + x + "</br></br>");


// For = Para
for(a=0; a < x; a++){
    document.write("</br> O valor do A: " + a);

}

//13.Switch não é laço de repetição

function pedir(){
    x = prompt("O que deseja pedir?")

    switch(x){
        case "0":
            alert("Você pediu sorvete!");
            break;
        case "1":
            alert("Você pediu um suco!");
            break;
        case "2":
            alert("Você pediu uma coca cola!");
            break;
        case "3":
            alert("Você pediu água!");
            break;
        default:
            alert("ops não temos essa opção!");
            break;
    }

}

//14.Temporizador

// function acao(){
//     document.write("executando...<br/>");
    
// }

//Executa de tempo em tempo!
//setInterval(acao,1000);

//setTimeout(acao, 3000);

//var timer= setInterval(acao, 3000);

//para parar a variavel é so abrir o console e digitar o comando clearInterval(timer);

//15.WebStorageService
//Session=Cookies temporarios
//No JavaScript podemos salvar com: Webstorage(localStorage, sessionStorage)

//16.Aplicando WebStorage

var nome = localStorage.nome;
console.log(nome);

