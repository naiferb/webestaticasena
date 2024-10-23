        // Función para mostrar información al hacer clic en las tarjetas
        function showInfo(technology) {
            const messages = {
                html: "HTML es el esqueleto de tu sitio web. ¡Sin HTML, no hay página web!",
                css: "CSS es el estilista de tu sitio web. ¡Dale personalidad a tu página!",
                js: "JavaScript es el cerebro de tu sitio web. ¡Hazlo interactivo!"
            };
            
            alert(messages[technology]);
        }

        // Función para resaltar términos técnicos automáticamente
        document.addEventListener('DOMContentLoaded', function() {
            const terms = ['HTML', 'CSS', 'JavaScript', 'DOM'];
            document.body.innerHTML = document.body.innerHTML.replace(
                new RegExp(`(${terms.join('|')})`, 'g'),
                '<span class="highlight">$1</span>'
            );
        });