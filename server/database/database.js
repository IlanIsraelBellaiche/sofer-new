const { Firestore } = require("@google-cloud/firestore");

// Id of the project into Firestore
const obj = {
  projectId: "sofer-334120",
  keyFilename: "./auth/sofer-334120-4d9644236516.json",
};

const firestore = new Firestore(obj);

// Export firestore like an object
// The object is "connected" to the project into Firestore
module.exports = { firestore };
