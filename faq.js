// Buscar Classe
const itensQuestionAnswer = document.querySelectorAll(".item")

// Entender item clicado 
itensQuestionAnswer.forEach(function(item) {
    item.addEventListener("click", function() {
       
        // Verificar se o item foi clicado
        const active = item.classList.contains("active")

        // Se o item estiver ativo
        if (!active) {

            // Abrir o Atual
            item.classList.add("active")

            // Se não Fechar Todas
        }
        else {
            item.classList.remove("active")
        }
    })
})
