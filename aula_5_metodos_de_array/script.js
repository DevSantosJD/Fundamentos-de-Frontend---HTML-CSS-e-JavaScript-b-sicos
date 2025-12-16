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

        let botaoRemover = document.createElement("button")
        //Adicionando classe no botão de remover pelo
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefa.appendChild(novaTarefa)
        
    }

}

function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i){
    //Abre uma caixa para digitar texto
    let tarefaEditada = prompt("Edite a tarefa: ")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}