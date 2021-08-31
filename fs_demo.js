const fs = require('fs');
const path = require('path');

//c:\\users\alain\Desktop\prog_web_1\chapitre04\test
// fs.mkdirSync(path.join(__dirname, 'test'), {});
// console.log('Dossier test cree');
// fs.mkdir(path.join(__dirname, 'test2'), {}, err => {
//     if (err) throw err;
//     console.log('Dossier test2 cree avec succes!!');
// });
//c:\\users\alain\Desktop\prog_web_1\chapitre04\test\salut.txt
fs.appendFile(
    path.join(__dirname, 'test', 'salut.txt'),
    'ajouter du texte.... !!!!!\n',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt cree');
    } 
);
console.log('fin du programme');
