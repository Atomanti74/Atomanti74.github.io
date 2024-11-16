function udvozles(vezeteknev, keresztnev) {
    console.log(`Üdvözlöm, ${vezeteknev} ${keresztnev}!`);
}
udvozles('Rácz', 'Anti');
udvozles('Rácz', 'Rebeka');


function szorzas(szam1, szam2) {
    return szam1 * szam2;
}
console.log(szorzas(5, 8)); 

console.log(szorzas(324, 610)); 




function szorzas(szam1, szam2) {
    if (typeof szam1 !== 'number') {
        console.log(`Hibás paraméter: ${szam1}`);
        return;
    }
    if (typeof szam2 !== 'number') {
        console.log(`Hibás paraméter: ${szam2}`);
        return;
    }
    return szam1 * szam2;
}



let szamok = [3, 6, 12, 53, 86, 43, 934, 201, 53, 87];

// 8.a.: Írasd ki a console-ra a 86-os számot!
console.log(szamok[4]); 

// 8.b.: Írasd ki a console-ra a tömb összes elemét!
for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i]);
}


// 8.c.: Írasd ki a console-ra a tömb összes elemének a háromszorosát!
for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i] * 3);
}

// 8.d.: Írasd ki a console-ra a tömb összes elemének a háromszorosánál egyel kisebb számot!
for (let i = 0; i < szamok.length; i++) {
    console.log((szamok[i] * 3) - 1);
}


// 8.e.: Írasd ki a console-ra a tömb-ből azokat az elemeket, amik páratlanok

for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] % 2 !== 0) {
        console.log(szamok[i]);
    }
}

