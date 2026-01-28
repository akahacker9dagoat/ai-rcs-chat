const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    participants: {
        type: [String], // Array of participant IDs
        required: true
    },
    messages: [{
        sender: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update the updatedAt field on every save
ConversationSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;