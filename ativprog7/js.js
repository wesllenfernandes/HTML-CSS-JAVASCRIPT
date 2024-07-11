document.addEventListener("DOMContentLoaded", function() {
    var toggleParagraphs = document.querySelectorAll(".toggleParagraph");
    var hiddenParagraphs = document.querySelectorAll(".hiddenParagraph");

    hiddenParagraphs.forEach(function(paragraph) {
        paragraph.style.display = "none";
    });


    toggleParagraphs.forEach(function(toggleParagraph, index) {
        toggleParagraph.addEventListener("click", function() {
            if (hiddenParagraphs[index].style.display === "none") {
                hiddenParagraphs[index].style.display = "block";
            } else {
                hiddenParagraphs[index].style.display = "none";
            }
        });
    });
});

var nome = prompt('qual seu nome')
alert("seja bem vindo(a) " + nome + "! tudo bem? apresentarei o catalogo com diferentes livros. espero que goste!")

document.addEventListener('DOMContentLoaded', function() {
    const enviarBtn = document.getElementById('Btn');

    enviarBtn.addEventListener('click', function() {
        window.open('1.html', '_blank'); 
    });
});