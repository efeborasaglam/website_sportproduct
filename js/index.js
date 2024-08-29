/*document.addEventListener("DOMContentLoaded", function () {
    // Überwache das Scroll-Ereignis
    window.addEventListener("scroll", function () {
        // Berechne die Anzahl der 150vh-Segmente
        const scrollSegments = Math.ceil(window.scrollY / (window.innerHeight * 1.5));

        // Wechsle die Hintergrundfarbe basierend auf den 150vh-Segmenten
        if (scrollSegments % 2 === 0) {
            document.body.style.backgroundColor = "#5C199B";
        } else {
            document.body.style.backgroundColor = "#480587"; // Ändere dies in die gewünschte Farbe
        }
    });
});*/
        // Füge eine Klasse hinzu, wenn das Element im sichtbaren Bereich ist
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animation-visible');
                }
            });
        }, { threshold: 0.5 });

        // Wähle alle Elemente mit der Klasse 'animated-element' aus und überwache sie
        document.querySelectorAll('.animated-element').forEach(element => {
            observer.observe(element);
        });
        document.addEventListener("DOMContentLoaded", function () {
          var navbar = document.getElementById("navbar");
        
          // Eventlistener hinzufügen, um auf das Scrollen der Seite zu reagieren
          window.addEventListener("scroll", function () {
            // Überprüfen, ob die Seite nach unten gescrollt wurde
            if (window.scrollY > 0) {
              // Ändere die Hintergrundfarbe der Navigation
              navbar.style.backgroundColor = "#80008080";
              // Ändere die Textfarbe der Navigationselemente
              changeNavTextColor("white");
            } else {
              // Setze die Standardfarbe zurück, wenn nach oben gescrollt wird
              navbar.style.backgroundColor = "#8A2BE2";
              // Setze die Standardtextfarbe zurück
              changeNavTextColor("black");
            }
          });
        });
        
        // Funktion zum Ändern der Textfarbe der Navigationselemente
        function changeNavTextColor(color) {
          var navLinks = document.querySelectorAll(".navbar-nav a.nav-link");
          navLinks.forEach(function (link) {
            link.style.color = color;
          });
        }
        
          
          const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_arrc3du';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});