const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
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
    sentiment: {
        type: Number,
        required: false,
    },
    isSpam: {
        type: Boolean,
        default: false,
    },
    moderationScore: {
        type: Number,
        required: false,
    },
    aiAnalysis: {
        type: Object,
        required: false,
    }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;