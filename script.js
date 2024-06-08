document.addEventListener("DOMContentLoaded", function () {
    const names = [
        "João Silva", "Carlos Oliveira", "Pedro Santos", "José Pereira", "Ricardo Costa",
        "Luiz Martins", "Roberto Almeida", "Marcelo Souza", "Fernando Lima", "Bruno Fernandes",
        "Gabriel Alves", "André Araújo", "Rodrigo Barros", "Diego Rocha", "Lucas Ribeiro",
        "Felipe Melo", "Gustavo Nogueira", "Renato Carvalho", "Rafael Machado", "Victor Teixeira",
        "Thiago Gomes", "Leonardo Azevedo", "Eduardo Monteiro", "Daniel Farias", "Alex Borges",
        "Matheus Cardoso", "Juliano Coelho", "Igor Pires", "Alexandre Mendes", "Antonio Vieira",
        "Francisco Cunha", "Maurício Freitas", "Vinícius Guimarães", "Otávio Braga", "Henrique Dias",
        "Sérgio Lopes", "Wallace Ribeiro", "Cláudio Moreira", "Davi Pinto", "Samuel Batista",
        "Márcio Neves", "Elias Ramos", "Fábio Lima", "Paulo Freire", "Ricardo Silveira",
        "Arthur Santos", "Vitor Barros", "Hugo Carvalho", "Bernardo Lima", "Rui Alves"
    ];
    
    let currentIndex = Math.floor(Math.random() * names.length);

    function showPopup() {
        const popup = document.getElementById("popup");
        const popupText = document.getElementById("popupText");

        // Obter a hora atual
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        // Mostrar o nome atual e a hora no pop-up
        popupText.innerHTML = `${names[currentIndex]} acabou de comprar <br> ${timeString}`

        popup.classList.add("show");

        // Ocultar o pop-up após 5 segundos
        setTimeout(function () {
            popup.classList.remove("show");
        }, 3000);

        // Incrementar o índice para o próximo nome
        currentIndex = (currentIndex + 1) % names.length;
    }


    showPopup()

    currentIndex = 1

    // Mostrar o pop-up a cada 15 segundos
    setInterval(showPopup, 15000);
});
