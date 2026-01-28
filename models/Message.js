const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversationId: { type: String, required: true },
    senderId: { type: String, required: true },
    encryptedContent: { type: String, required: true },
    encryptionKey: { type: String, required: true },
    iv: { type: String, required: true },
    messageType: { type: String, required: true },
    aiAnalysis: {
        sentiment: { type: String, required: true },
        isSpam: { type: Boolean, required: true },
        flagged: { type: Boolean, required: true },
        moderationScore: { type: Number, required: true },
    },
    reactions: [{ type: String }],
    timestamps: { createdAt: { type: Date, default: Date.now }, updatedAt: { type: Date, default: Date.now } }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;