document.addEventListener('DOMContentLoaded', function() {
    const prayerWheel = document.querySelector('.prayer-wheel img');
    const mantraBox = document.getElementById('mantra-box');
    let mantraTimeout;

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = 'block';

        (function fade() {
            let val = parseFloat(element.style.opacity);
            if (!((val += 0.1) > 1)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeOut(element) {
        element.style.opacity = 1;

        (function fade() {
            if ((element.style.opacity -= 0.1) < 0) {
                element.style.display = 'none';
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    prayerWheel.addEventListener('click', function() {
        clearTimeout(mantraTimeout); // Stop any existing timeout
        const mantras = [
            "TEJATA OM GATE GATE PARAGATE PARASAMGATE BODDHI SZOHA", // Pradzsnáparamita mantra
            "OM ÁH HUNG VADZSRA GURU PEMA SZIDDHI HUNG", // Vadzsraguru mantra
            "OM MÁNI PEME HUNG", // Avalókitésvara (Csenrézi) mantra
            "TEJATA OM BEKANZE BEKANZE MAHA BEKANZE RADZA SZAMUDGATE SZOHA", // Gyógyító Buddha mantra
            "OM TARE TUTTARE TURE SZOHA", // Tara mantra
            "OM TARE TUTTARE TURE MAMA AJU PUNYE DZSNANA PUSTIM KURU SZOHA", // Hosszú élet Fehér Tara mantra
            "OM DZAMBHALA DZHALENDRAJE SZOHA", // öt Dzambala jólét istenség mantra
            "OM DZAMBHALA DZHALENDRAJE BANDZHA KOLLA KOLLA HUNG" // Dzambala mantra
        ];

        const randomIndex = Math.floor(Math.random() * mantras.length);
        mantraBox.textContent = mantras[randomIndex];
        fadeIn(mantraBox);

        mantraTimeout = setTimeout(function() {
            fadeOut(mantraBox);
        }, 10000); // 10 seconds later, fade out mantraBox
    });

    prayerWheel.addEventListener('mouseover', function() {
        mantraBox.textContent = "Kattints az ima malomra!";
        fadeIn(mantraBox);
    });

    prayerWheel.addEventListener('mouseout', function() {
        fadeOut(mantraBox);
    });

    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener('click', function() {
            collapsibles.forEach((item) => {
                if (item !== collapsible) {
                    item.classList.remove('active');
                }
            });
            collapsible.classList.toggle('active');
        });
    });
});

function initMap() {
    const locations = [
        { lat: 46.846107, lng: 17.212381 },
        { lat: 48.032635, lng: 19.829793 },
        { lat: 46.796002, lng: 18.554982 }
    ];
    locations.forEach((location, index) => {
        new google.maps.Map(document.getElementById('map' + (index + 1)), {
            zoom: 15,
            center: location
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(function () {
        loadingScreen.style.opacity = 0;
        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 1000);
    }, 1000);
});

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}
