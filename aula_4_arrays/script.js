//Criando Array vazio
let tarefas = new Array()

function adicionarTarefa() {

    const mensagemParagrafo = document.getElementById("mensagem");
    const inputTarefa = document.getElementById("inputTarefa");
    
    let tarefa = inputTarefa.value.trim();

    if(tarefa == ""){
        let mensagemErro ="Por favor, digite uma tarefa válida!"
        mensagemParagrafo.textContent = mensagemErro
        mensagemParagrafo.style.color = "#c81919ff";
        
    }else{  
        let mensagemSucesso = "Tarefa criada com Sucess!"
        mensagemParagrafo.textContent = mensagemSucesso
        mensagemParagrafo.style.color = "#156b18ff"

        tarefas.push(tarefa)
        renderizarTarefas()

    }

    inputTarefa.value = "";
    
}

function renderizarTarefas(){
    const listaTarefa = document.getElementById("listaTarefas");
    listaTarefa.innerHTML = ""

    for(let i=0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        listaTarefa.appendChild(novaTarefa);
    }

}