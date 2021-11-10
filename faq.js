// Buscar Classe
const itensPerguntasERespostas = document.querySelectorAll(".item")

// Entender item clicado 
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener("click", function() {
       
        // Verificar se o item foi clicado
        const estaAtivo = item.classList.contains("ativo")

        // Se o item estiver ativo
        if (!estaAtivo) {

            // Abrir o Atual
            item.classList.add("ativo")

            // Se não Fechar Todas
        }
        else {
            item.classList.remove("ativo")
        }
    })
})
