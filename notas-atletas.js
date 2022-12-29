// Calcula a media valida do atleta
 calculaMediaValida() {
    // Ordenando as notas
   this.notas = this.notas.sort();

   // Eliminando a maior e menor nota
   this.notas = this.notas.slice(1, 4);

   // Calculando a media
   // Acumulador para salvar a soma das notas
   var acumulador = 0;
   // Metodo forEach para somar as notas
   this.notas.forEach((nota) => {
     acumulador = nota + acumulador;
   });

   // Calculo da media utilizando o acumulador e a quantidade de notas
   let mediaValida = acumulador / this.notas.length;

   // Retorna a media valida do atleta
   return mediaValida;
 }

}
