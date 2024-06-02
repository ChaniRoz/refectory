
const fs = require('fs');

const write = (data) => {
    fs.writeFile('./order.txt', data, (err) => {
        console.log("create")
    })
}

// fs.readFile('./order.xlsx', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data)
//     process.exit(1)

// })
