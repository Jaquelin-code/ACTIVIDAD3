document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("language-toggle").addEventListener("click", function() {
        const currentLang = document.documentElement.lang;
        
        if (currentLang === "es") {
            document.documentElement.lang = "en";
            document.getElementById("welcome").innerText = "Welcome";
            document.querySelector("header h1").innerText = "Product List";
            document.querySelector(".productos-destacados h2").innerText = "Available Products";
            
            document.querySelector(".producto:nth-child(1) p").innerText = "School Backpack - $100.00";
            document.querySelector(".producto:nth-child(2) p").innerText = "Notebook - $25.00";
            document.querySelector(".producto:nth-child(3) p").innerText = "Pencils - $20.00";
            document.querySelector(".producto:nth-child(4) p").innerText = "Pencil Case - $90.50";
            document.querySelector(".producto:nth-child(5) p").innerText = "Pens - $70.80";
            document.querySelector(".producto:nth-child(6) p").innerText = "Erasers - $15.80";
            document.querySelector(".producto:nth-child(7) p").innerText = "Coloring Book - $80.90";
            
        } else {
            document.documentElement.lang = "es";
            document.getElementById("welcome").innerText = "Bienvenido";
            document.querySelector("header h1").innerText = "Lista de Productos";
            document.querySelector(".productos-destacados h2").innerText = "Productos En Existencia";
            
            document.querySelector(".producto:nth-child(1) p").innerText = "Mochila Escolar - $100.00";
            document.querySelector(".producto:nth-child(2) p").innerText = "Cuaderno - $25.00";
            document.querySelector(".producto:nth-child(3) p").innerText = "Lapices - $20.00";
            document.querySelector(".producto:nth-child(4) p").innerText = "Estuchera - $90.50";
            document.querySelector(".producto:nth-child(5) p").innerText = "Bolígrafos - $70.80";
            document.querySelector(".producto:nth-child(6) p").innerText = "Borradores - $15.80";
            document.querySelector(".producto:nth-child(7) p").innerText = "Libro de Colorear - $80.90";
        }
    });
});
