const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // The TTL index is set on this field
    expires: 86400, // 24 hours in seconds
  },
});

module.exports = mongoose.model("BlacklistedToken", blacklistedTokenSchema);
