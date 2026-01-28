const mongoose = require('mongoose');

// Define the encrypted message schema
const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    senderId: {
        type: String,
        required: true,
    },
    recipientId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    // AI Analysis Fields
    sentiment: {
        type: Number,
        default: 0,
        // Define range -1 (negative) to 1 (positive)
    },
    isSpam: {
        type: Boolean,
        default: false,
    },
    moderationScore: {
        type: Number,
        default: 0,
    },
});

// Export the model
module.exports = mongoose.model('Message', MessageSchema);