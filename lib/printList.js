// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {

    let table = [];

    let i = 0;

    for (const item of list) {

        if (!item.name
            || typeof item.price !== 'object'
            || typeof item.sold !== 'number'
            || typeof item.inStock !== 'number'
            || typeof item.name !== 'string'
            || !item.price
            || !item.price.value
            ) {
            continue;
        }

        try {
            table.push(`${++i}) ${item.name}: ${item.price.value} ${item.price.currency}; parduota: ${item.sold}; likutis: ${item.inStock};`);
        } catch (error) {
            continue
        }
    }

    return table.join('\n');

}

module.exports = printList;