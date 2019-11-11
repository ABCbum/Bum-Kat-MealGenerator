const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://randomeal-14692.firebaseio.com"
});

const db = admin.firestore();
const root = db.collection('food');

async function getOneRandomDishFrom(collection) {
  if(typeof collection === "string") collection = root.doc('types').collection(collection);
  const snapshot = await collection.get();
  const randIndex = Math.floor(Math.random() * snapshot.size);
  const randDish = snapshot.docs[randIndex];

  console.log(randDish.id);
  return randDish.data();
}

async function getRandMeal() {
  const res = {};
  const typesDoc = root.doc('types');
  const collections = await typesDoc.listCollections();

  for(const collection of collections) {
    console.log(collection.id);
    res[collection.id] = await getOneRandomDishFrom(collection);
  }

  return res;
}

module.exports = {
  getRandMeal,
  getOneRandomDishFrom
}