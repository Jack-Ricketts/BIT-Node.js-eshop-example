// funkcija, kuri skaiciuoja uzdirbtu pinigu kieki (kiek suprekiauta)

function profit(goodsInfo) {

    let sum = 0;
    let currency

    for(const item of goodsInfo) {
        sum += item.price.value * item.sold;
        if(item.price.currency = 'Eur'){
            currency = 'Eur'
        }
    }
    return sum + ' ' + currency;
    
}

module.exports = profit;