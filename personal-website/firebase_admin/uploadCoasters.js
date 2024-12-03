const admin = require("firebase-admin");
const serviceAccount = require("./personal-site-64fd2-firebase-adminsdk-bwtj9-0bbac7acae.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const coasters = require("./db_upload/Visited_Coasterlist.json");

const uploadCoasters = async () => {
  const batch = db.batch();

  coasters.forEach((coaster, index) => {
    const docRef = db.collection("coasters").doc(`coaster_${index}`);
    batch.set(docRef, coaster);
  });

  await batch.commit();
  console.log("Data uploaded successfully!");
};

uploadCoasters();