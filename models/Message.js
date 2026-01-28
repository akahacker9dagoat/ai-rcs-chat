const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true,
    },
    senderId: {
        type: String,
        required: true,
    },
    encryptedContent: {
        type: String,
        required: true,
    },
    encryptionKey: {
        type: String,
        required: true,
    },
    iv: {
        type: String,
        required: true,
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'audio', 'file'],
        default: 'text',
    },
    aiAnalysis: {
        sentiment: {
            type: String,
            enum: ['positive', 'neutral', 'negative'],
            default: null,
        },
        isSpam: {
            type: Boolean,
            default: false,
        },
        flagged: {
            type: Boolean,
            default: false,
        },
        moderationScore: {
            type: Number,
            min: 0,
            max: 1,
        },
    },
    reactions: [{
        userId: String,
        emoji: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;