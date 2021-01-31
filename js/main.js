function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.youtube.com/?gl=BR");
    //window.location.href = "https://www.youtube.com/?gl=BR";
}
function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML= "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Página carregada")
}
function change(elemento) {
    console.log(elemento.value)
}


/*function soma(n1, n2) {
    return n1 + n2;
}*/

/*function setReplace (frase, nome, novo_nome) {
    return frase.replace (nome, novo_nome)
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log (validaIdade(idade));*/

//alert (soma(5, 10))
//alert (setReplace("Vai Japão", "Japão", "Brasil"))

/*var d = new Date();
alert (d);
alert (d.getMonth() + 1);
alert (d.getHours());
alert (d.getMinutes());
*/

/*
var count;
for (count=0; count <= 5; count++) {
    console.log(count);
}*/


/*var count = 0;
while (count <= 5) {
    console.log(count)
    count++
}*/



/*var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert ("maior de idade!");
}else {
    alert ("menor de idade");
}*/

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)
console.log(frutas[1].cor)*/

/*var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
console.log(fruto.cor);*/

/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "))
*/




/*var nome = "Victor Bittencourt";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert (nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.toUpperCase());*/