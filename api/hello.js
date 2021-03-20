var admin = require("firebase-admin");

var serviceAccount = require("../service-key.json");

module.exports = async (req, res) => {
  try {
    console.log(serviceAccount);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    const db = admin.firestore();

    const { name = "World" } = req.query;

    console.log("Hello");
    const docRef = db.collection("users").doc("alovelace");
    await docRef.set({
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("DONE");
    res.status(200).send(`Hello ${name}!`);
  } catch (e) {
    console.log(e);
    res.status(200).send(e.toString());
  }
};
