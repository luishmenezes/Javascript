class Aluno {
    constructor(id,nome,nota){
        this.id = id;
        this.nome = nome;
        this.nota = nota;
    }
}

class listaDeAlunos{
    constructor(){
        this.alunos = [];
    }

    adicionarAluno(id, nome, nota){
        const aluno = new Aluno(id, nome, nota);
        this.alunos.push(aluno);
    }
    
    buscarPorAlunoId(id){
        return this.alunos.find(aluno => aluno.id === id);
    }
    
    calcularMedia(){
        const totalNotas = this.alunos.reduce((total, aluno) => total + aluno.nota, 0);
        return totalNotas/ this.alunos.length;
    
    }
}

const listaAlunos = new listaDeAlunos();

listaAlunos.adicionarAluno(1,"luis",8)
listaAlunos.adicionarAluno(2,"milena",7)
listaAlunos.adicionarAluno(3,"mariana",10)

const alunoEncontrado = listaAlunos.buscarPorAlunoId(1);
console.log("aluno encontrado: ", alunoEncontrado);

const media = listaAlunos.calcularMedia();
console.log("Media dos alunos: " + media);

