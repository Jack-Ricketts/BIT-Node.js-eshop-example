console.clear();

/*
UZDUOTIS:
- perskaityti visu produktu failus;
- susideti visus produktus i viena bendra masyva;
- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)
"Univermagas" pardavime turi:
-----------------------------
1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimalus galima parduotuves apyvarta: [total pinigu] [valiuta]
*/

const sum = require('./math/sum.js');
const readFile = require('./lib/readFile.js');
const jsonParse = require('./lib/jsonParse.js');

(async () => {

    const prekes = ['arbata', 'kvepalai', 'masina'];
    const prekiuInfo = [];

    for (const preke of prekes){
        const content = await readFile(preke);

        if(typeof content === 'string'){
            if((jsonParse(content)[0] !== true)){
                prekiuInfo.push(jsonParse(content)[1]);
            } else {
                console.log('KLAIDA PARSINANT', preke);
            }
        } else {
            console.log('FAILAS NEEGZISTUOJA', preke);
        }
    }

    console.log(prekiuInfo);

    let totalInStock = 0;
    let totalSold = 0;
    let totalPriceValue = 0;

    for (let i = 0; i < prekiuInfo.length; i++){
        console.log(`Univermagas pardavime turi: ${prekiuInfo[i].name}; ${prekiuInfo[i].price.value} ${prekiuInfo[i].price.currency}; parduota: ${prekiuInfo[i].sold}; likutis: ${prekiuInfo[i].inStock}`);
        totalInStock += prekiuInfo[i].inStock;
        totalSold += prekiuInfo[i].sold;
        totalPriceValue += prekiuInfo[i].price.value
    }
    
    console.log(`Turimu prekiu sandelyje: ${totalInStock}`);
    console.log(`Parduotu prekiu: ${totalSold}`);
    console.log(`Suprekiauta suma: ${totalPriceValue} ${prekiuInfo[0].price.currency}`);
    
})();


