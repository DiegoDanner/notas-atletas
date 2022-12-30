class Passaporte {
  constructor(nome, sobrenome){
      this.nome = nome
      this.sobrenome = sobrenome
  }
  obterNome(){
      return this.nome.toLowerCase()
  }
  obterSobrenome(){
      return this.sobrenome.toUpperCase()
  }
  obterNomeCompleto(){
      return this.nome +" "+ this.sobrenome
  }
  obterIniciais(){
      return this.nome[0] +"."+ this.sobrenome[0] + "." 
  }
  obterEhNomeValido(){
      if (
          this.nome.length > 0 &&
          this.sobrenome.length > 0 &&
          this.sobrenome.endsWith(".") === false
          ) {
              return "Sim";
      } else {
          return "Não";
      }
  }
}

// Uso da classe
let mario = new Passaporte("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.obterIniciais());
console.log(mario.obterEhNomeValido());

console.log("---");


let nome = document.querySelector("#dv-nome");
let sobrenome = document.querySelector("#dv-sobrenome");

let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");
let dvResposta4 = document.querySelector("#dv-resposta-4");
let dvResposta5 = document.querySelector("#dv-resposta-5");

function formatar() {
    let devPassaporte = new Passaporte(nome.value, sobrenome.value);

    dvResposta1.textContent = devPassaporte.obterNome();
    dvResposta2.textContent = devPassaporte.obterSobrenome();
    dvResposta3.textContent = devPassaporte.obterNomeCompleto();
    dvResposta4.textContent = devPassaporte.obterIniciais();
    dvResposta5.textContent = devPassaporte.obterEhNomeValido();
}

nome.addEventListener("keyup", formatar);
sobrenome.addEventListener("keyup", formatar);