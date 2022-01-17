console.clear();

const readFile = require('./lib/readFile.js');
const jsonParse = require('./lib/jsonParse.js');
const printList = require('./lib/printList.js');

(async () => {

    const prekes = ['arbata', 'kvepalai', 'masina'];

    const prekiuInfo = [];

    for (const preke of prekes){
        const content = await readFile(preke);

        if(typeof content === 'string' && content !== ''){
            if((jsonParse(content)[0] !== true)){
                prekiuInfo.push(jsonParse(content)[1]);
            } else {
                console.log('KLAIDA PARSINANT', preke);
            }
        } else {
            console.log('FAILAS NEEGZISTUOJA', preke);
        }
    }
    console.log('"Univermagas" pardavime turi:');
    console.log('-----------------------------');
    console.log(printList(prekiuInfo)); 
    console.log('-----------------------------');
    
})();



