const dicionarioDeAlunos = {};
//aqui pensei em abrir a lista


function adicionarAluno(id, nome, nota) {
  dicionarioDeAlunos[id] = { nome, nota };
}
// aqui pensei em uma função para poder adicionar os alunos


function buscarAlunoPorId(id) {
  return dicionarioDeAlunos[id];
}
//aqui pensei em uma forma de buscar a id

function calcularMediaNotas() {
  const idsAlunos = Object.keys(dicionarioDeAlunos);
  let totalNotas = 0;

  for (const id of idsAlunos) {
    totalNotas += dicionarioDeAlunos[id].nota;
  }

  return totalNotas / idsAlunos.length;
}
//aqui pensei uma forma de calcular a média das notas

adicionarAluno(1, "João", 8);
adicionarAluno(2, "Maria", 7);
adicionarAluno(3, "Pedro", 6);
//adicionando os alunos

const alunoEncontrado = buscarAlunoPorId(2);
console.log("Aluno encontrado:", alunoEncontrado);


const mediaNotas = calcularMediaNotas();
console.log("Média das notas dos alunos:", mediaNotas);
