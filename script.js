// // --------------- PRÁTICA GUIADA ---------------

// const bimestre1 = [10, 4, 3, 8]
// const bimestre2 = [2 ,6, 10, 3]
// const bimestre3 = [3, 6, 8, 10]
// const bimestre4 = [5, 2, 7, 8]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]//length = 4
//  //índices             0           1         2           3

 //console.log(notasDoAno[0][1])
 //console.table(notasDoAno)

// for(let indiceBimestre = 0; indiceBimestre < notasDoAno.length; indiceBimestre++){
//   console.log(indiceBimestre)

//   let soma = 0

//   for(let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
//     soma = soma + notasDoAno[indiceBimestre][indiceNota]
//   }

//   console.log("soma do bimestre", soma)

//   let mediaBimestre = soma / notasDoAno[indiceBimestre].length

//   console.log(`A soma das notas do bimestre ${notasDoAno[indiceBimestre]+1} é: ${soma} \nA média do bimestre ${notasDoAno[indiceBimestre]+1} é ${mediaBimestre}`)

// }

//for in

// for(let indiceBimestre in notasDoAno){
//   console.log(indiceBimestre)
//   let soma = 0

//   for(let indiceNota = 0; indiceNota < notasDoAno[indiceBimestre].length; indiceNota++){
//     soma = some + notasDoAno[indiceBimestre][indiceNota]
//   }
//    console.log("soma do bimestre", soma)
  
//    let mediaBimestre = soma / notasDoAno[indiceBimestre].length
//   console.log(`A soma das notas do bimestre ${Number(indiceBimestre)+1} é: ${soma} \n A média do bimestre ${Number(indiceBimestre)+1} é ${mediaBimestre}`)
// }

//for(let indice in array){
// codigo
//}

//for of
// for(let indiceBimestre in notasDoAno){
//   console.log(indiceBimestre)
//   let soma = 0

//   for(let nota of indiceNota[indiceBimestre]){
//     //nota vai retornar cada um dos elementos de cada array bimestre
//     soma = some + nota
//   }
//    console.log("soma do bimestre", soma)
  
//    let mediaBimestre = soma / notasDoAno[indiceBimestre].length
//   console.log(`A soma das notas do bimestre ${Number(indiceBimestre)+1} é: ${soma} \n A média do bimestre ${Number(indiceBimestre)+1} é ${mediaBimestre}`)
// }











// // --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
   {
     titulo: 'O Auto da Compadecida',
     ano: 2000,
     diretor: 'Guel Arraes',
     elenco: [
       'Selton Mello',
       'Mateus Nachtergaele',
       'Marco Nanini',
       'Fernanda Montenegro',
     ],
   },
   {
         titulo: 'Carandiru',
         ano: 2001,
         diretor: 'Hector Babenco',
         elenco: [
         'Wagner Moura',
         'José Carlos Vasconcelos',
         'Ailton Graça',
         'Caio Blat',
       ],
     },
     {
       titulo: 'Aquarius',
       ano: 2012,
       diretor: 'Kléber Mendonça Filho',
       elenco: [
       'Sônia Braga',
       'Humberto Carrão',
       'Maeve Jinkings',
       'Bárbara Colen',
     ],
   },
 ]

 //escreva seu código abaixo 👇🏻

//  for (let i = 0; i < filmes.length; i++) {

//  console.log(`Diretor do filme: ${filmes[i].diretor} , ano de produção: ${filmes[i].ano} e o titulo do filme é ${filmes[i].titulo}`);

//  for(let j = 0; j < filmes.length; j++){
//   console.log(`Ator / Atriz: ${filmes[i].elenco[j]} `)
//  }
// }

// for of e for in

for(let i in filmes){
  console.log(`Titulo do filme: ${filmes[i].titulo}, de ${filmes[i].ano} e seu diretor ${filmes[i].diretor}`)

  for(let ator of filmes[i].elenco){
    console.log(`Ator / Atriz: ${ator}`)
  }
}