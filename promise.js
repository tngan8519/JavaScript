const store = {
    lotion:{
        inventory: 50,
        cost: 10
    },
    cuticleOil:{
        inventory: 5,
        cost: 1
    },
    nailPolish:{
        inventory: 9,
        cost: 2
    }
}
const order = {
    items: [['lotion', 1], ['nailPolish', 2]],
    prePaidBalance: 79.82
  };
const checkInventory = (order) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const itemsArr = order.items;
            let inStock = itemsArr.every(item => item[1]<=store[item[0]].inventory)
            if(inStock){
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost
                })
                console.log(`Total of order is ${total}`)
                resolve([order,total])
            }else{
                reject('Item is out')
            }
        },1000)
    })
}

const processPayment = (resolveArr) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const order = resolveArr[0];
            const total = resolveArr[1];
            if(order.prePaidBalance > total){
                let trackingNum = Math.floor(Math.random() * 1000000)
                console.log(`order success, tracking number is ${trackingNum}`)
                resolve([order,trackingNum])
            }else{
                reject('not enough money')
            }
        },1000)
    })
}

const processShipping = (resolveArr) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const order = resolveArr[0]
            const trackingNum = resolveArr[1]
            resolve(`the order ship with tracking number ${trackingNum}`)
        },1000)
    })
}

checkInventory(order)
.then(resolveArr => {
    return processPayment(resolveArr)
})
.then(resolveArr => {
    return processShipping(resolveArr)
})
.then(successMessage =>{
    console.log(successMessage)
})
.catch(errorMessage => {
    console.log(errorMessage)
})