function adicionarTarefa() {
    // Variável que recebe o valor da tag <p>
    let mensagemParagrafo = document.getElementById("mensagem");
    const inputTarefa = document.getElementById("inputTarefa");
    
    // Pega o valor digitado no input e utiliza o método trim 
    // para remover espaços em branco!
    let tarefa = inputTarefa.value.trim();

    if(tarefa == ""){
        let mensagemErro ="Por favor, digite uma tarefa válida!"
        // Adicionando novo texto ao paragrafo 
        mensagemParagrafo.textContent = mensagemErro
        mensagemParagrafo.style.color = "#c81919ff";
        
    }else{ 
        
        let mensagemSucesso = "Tarefa criada com Sucess!"
        // Adicionando novo texto ao paragrafo
        mensagemParagrafo.textContent = mensagemSucesso
        mensagemParagrafo.style.color = "#156b18ff"

        // Captura a lista onde as tarefas serão adicionadas
        const listaTarefa = document.getElementById("listaTarefas");

        // Cria um novo elemento <li>
        let novaTarefa = document.createElement("li");

        // Adiciona o texto da tarefa dentro do <li>
        novaTarefa.textContent = tarefa;

        // Adiciona o novo <li> dentro da <ul> ou <ol> da lista
        listaTarefa.appendChild(novaTarefa);
    }

    // Limpa o campo de input após adicionar a tarefa
    inputTarefa.value = "";
    
}
