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
x = 2;

switch(x){
    case 0:
        alert("O x vale 0 !");
        break;
    case 1:
        alert("O x vale 1 !");
        break;
    case 2:
        alert("O x vale 2 !");
        break;
}



