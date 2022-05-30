const fs = require('fs');

const userName = 'Pope';

fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Successfully wrote to user-data.txt');
})