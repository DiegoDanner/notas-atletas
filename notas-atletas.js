class Atleta {
  constructor(nome, sobrenome){
      this.nome = nome
      this.sobrenome = sobrenome
  }
  obterNome(){
      return this.nome.toUpperCase()
  }
  obterSobrenome(){
      return this.sobrenome.toUpperCase()
  }
  obterNomeCompleto(){
      return this.nome +" "+ this.sobrenome
  }
  retornaListaNotas(){
    let atletas = notas.map(function(notas){
        console.log(notas)
        return atletas.notas
    })
  }
  obterEhNomeValido(){
      /*if (
          this.nome.length > 0 &&
          this.sobrenome.length > 0 &&
          this.sobrenome.endsWith(".") === false
          ) {
              return "Sim";
      } else {
          return "Não";
      }
  }*/
}

 atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
     },
     {
       nome: "Fernando Puntel",
       notas:  [8, 10, 10, 7, 9.33]
     },
     {
       nome: "Daiane Jelinsky",
       notas: [7, 10, 9.5, 9.5, 8]
     },
     {
       nome: "Bruno Castro",
       notas: [10, 10, 10, 9, 9.5]
     }
       ]
// Uso da classe
let mario = new Atleta("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.retornaListaNotas());
console.log(mario.obterEhNomeValido());


let nome = document.querySelector("#dv-nome");
let sobrenome = document.querySelector("#dv-sobrenome");

let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");
let dvResposta4 = document.querySelector("#dv-resposta-4");
let dvResposta5 = document.querySelector("#dv-resposta-5");

function formatar() {
    let devAtleta = new Atleta (nome.value, sobrenome.value);

    dvResposta1.textContent = devAtleta.obterNome();
    dvResposta2.textContent = devAtleta.obterSobrenome();
    dvResposta3.textContent = devAtleta.obterNomeCompleto();
    dvResposta4.textContent = devAtleta.retornaListaNotas();
    dvResposta5.textContent = devAtleta.obterEhNomeValido();
}

nome.addEventListener(`keyup`, formatar);
sobrenome.addEventListener("keyup", formatar);