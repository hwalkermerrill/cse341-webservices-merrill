// Try to troubleshoot dns errors
const dns = require('dns');
// dns.setServers(['208.67.222.222', '208.67.220.220']); // OpenDNS

const mongoose = require('mongoose');
// dotenv.config();
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is not defined. Check your environment variables.");
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
module.exports = mongoose;