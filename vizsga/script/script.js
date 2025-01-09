function initMap() {
    const locations = [
        {lat: 46.846107, lng: 17.212381}, // Zalaszántó
        {lat: 48.032635, lng: 19.829793}, // Tar
        {lat: 46.796002, lng: 18.554982}  // Simontornya
    ];
    locations.forEach((location, index) => {
        new google.maps.Map(document.getElementById('map' + (index + 1)), {
            zoom: 15,
            center: location
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(function() {
        loadingScreen.style.opacity = 0;
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 1000); // Időt adunk az áttűnésnek
    }, 1000); // 2 másodpercig tart a betöltés

    const mantras = [
        "TEJATA OM GATE GATE PARAGATE PARASAMGATE BODDHI SZOHA", // Pradzsnáparamita mantra
        "OM ÁH HUNG VADZSRA GURU PEMA SZIDDHI HUNG", // Vadzsraguru mantra
        "OM MÁNI PEME HUNG", // Avalókitésvara (Csenrézi) mantra
        "TEJATA OM BEKANZE BEKANZE MAHA BEKANZE RADZA SZAMUDGATE SZOHA", // Gyógyító Buddha mantra
        "OM TARE TUTTARE TURE SZOHA", // Tara mantra
        "OM TARE TUTTARE TURE MAMA AJU PUNYE DZSNANA PUSTIM KURU SZOHA", // Hosszú élet Fehér Tara mantra
        "OM DZAMBHALA DZHALENDRAJE SZOHA", // öt Dzambala jólét istenség mantra
        "OM BENZASZATTO SZAMAJA MANUPALAJA BENZASZATTO TENOPA TRISTA DRI DHO ME BHAVA SZUTO KHAJO ME BHAVA SZUPO KHAJO ME BHAVA ANURAKTO ME BHAVA SZARVA SZIDDHI ME PRAJACA SZARVA KARMA SUCA ME CSITTAM SRIJAM KURU HUM HA HA HA HO BHAGAVAN SZARVA TATHAGATA BENZA MAME MUNCA BENZI BHAVA MAHA SZAMAJA SZATTVA AH" // Vadzsraszattva mantra
    ];

    const prayerWheel = document.querySelector('.prayer-wheel img');
    const mantraBox = document.getElementById('mantra-box');

    prayerWheel.addEventListener('mouseover', function() {
        mantraBox.textContent = "Kattints az ima malomra!";
        mantraBox.style.opacity = 1;
    });

    prayerWheel.addEventListener('mouseout', function() {
        mantraBox.style.opacity = 0;
    });

    prayerWheel.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * mantras.length);
        mantraBox.textContent = mantras[randomIndex];
        mantraBox.style.opacity = 1;
        
        // Időzítő a mantra eltüntetésére
        setTimeout(function() {
            mantraBox.style.opacity = 0;
        }, 15000); // 15 másodperc
    });

    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener('click', function() {
            // Először bezárjuk az összes többi szekciót
            collapsibles.forEach((item) => {
                if (item !== collapsible) {
                    item.classList.remove('active');
                }
            });

            // Megnyitjuk vagy bezárjuk a jelenlegi szekciót
            collapsible.classList.toggle('active');
        });
    });
});

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}
