const admin = require("firebase-admin");

// Load the service account key
const serviceAccount = require("./personal-site-64fd2-firebase-adminsdk-bwtj9-0bbac7acae.json");

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Load parks.json
const parksData = require("../../firebase_admin/db_upload/Visited_Parklist.json");

// Upload data to the "parks" collection
const uploadParks = async () => {
  try {
    const batch = db.batch();

    parksData.forEach((park) => {
      // Set document ID to the park's ID or auto-generate one
      const parkRef = db.collection("parks").doc(park.id);
      batch.set(parkRef, park);
    });

    await batch.commit();
    console.log("Parks data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading parks data:", error);
  }
};

// Run the upload function
uploadParks();