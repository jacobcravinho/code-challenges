const faker = require('faker')


const loop = (num, func) => {
    let obj=[];
    for (let i=1; i <= num; i++) {
        const x = func()
        obj = [...obj,{...x}]
    }
    // console.log(obj)
    return obj
}

const fullContact = (num=1) => {
    // console.log(faker.helpers.createCard())
    const data = loop(num, faker.helpers.createCard)
    return data
}


module.exports = {
    fullContact
}