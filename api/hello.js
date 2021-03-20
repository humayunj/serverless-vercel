var admin = require('firebase-admin');

var serviceAccount = require("../service-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

const db = admin.firestore();


module.exports = (req,res) => {
    try {
    const {name = "World"}  = req.query;
    
    const docRef = db.collection('users').doc('alovelace');
    docRef.set({
        first:'Ada',
        last:  'Lovelace',
        born:1815
    });
    
    res.status(200).send(`Hello ${name}!`);
    } catch (e) {
        res.status(200).send(e.toString());
    }
}