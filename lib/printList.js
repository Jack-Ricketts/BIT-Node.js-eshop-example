// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

const isValid = require('../lib/isValid.js');

function printList(list) {
    const availableCurrency = ['Eur', 'Usd', 'Lit'];
    let table = [];

    let i = 0;
    for (const item of list) {
        const { name, price, inStock, sold } = item;

        if (!isValid.correctObject(item, 4)
            || !isValid.nonEmptyString(name)
            || !isValid.correctObject(price, 2)
            || !isValid.nonNegativeNumber(price.value)
            || !isValid.nonEmptyString(price.currency)
            || !availableCurrency.includes(price.currency)
            || !isValid.nonNegativeInteger(inStock)
            || !isValid.nonNegativeInteger(sold)) {
            continue;
        }
        try {
            table.push(`${++i}) ${name}: ${price.value} ${price.currency}; parduota: ${sold}; likutis: ${item.inStock};`);
        } catch (error) {
            console.log('KRITINE KLAIDA');
            continue;
        }
    }

    return table.join('\n');
}

module.exports = printList;