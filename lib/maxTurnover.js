// funkcija kuri apskaiciuoja maksimalia galima parduotuves apyvarta

function maxTurnover(goodsInfo) {

    let sum = 0;
    let currency;

    for(const item of goodsInfo){
        sum += item.price.value * (item.inStock + item.sold);
        if(item.price.currency = 'Eur'){
            currency = 'Eur'
        }
    }
    return sum + ' ' + currency;
}

module.exports = maxTurnover;