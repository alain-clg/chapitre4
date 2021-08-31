const EventEmitter = require('events');
class MaClasseEmeteur extends EventEmitter{ }

const emeteur = new MaClasseEmeteur();
// enregistrement du gestionnaire d'evenement
emeteur.on('evenement', () => console.log('kek chose'));
emeteur.on('autre', () => console.log('')  
);

// initier quelques evenements....
emeteur.emit('evenement');
emeteur.emit('autre');
emeteur.emit('autre');
emeteur.emit('autre');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('evenement');
emeteur.emit('autre');
