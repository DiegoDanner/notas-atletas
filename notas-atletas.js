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