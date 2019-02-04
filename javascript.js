let result = []

const hasOver9000 = function (element) {
    return element > 9000;
};

function getBigSpender(businesses) {
    result = businesses.filter(business => {
        return business.orders.some(hasOver9000);
    })
    return result;
}
console.log(getBigSpender(businesses));














