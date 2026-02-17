const mongoose = require('mongoose');

const { Schema } = mongoose;

const TraineeSchema = new Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
        },
        age: { type: Number, min: 0 },
        skills: [{ type: String, trim: true }],
        joinedAt: { type: Date, default: Date.now },
        isActive: { type: Boolean, default: true },
        notes: { type: String, trim: true },
    },
    { timestamps: true }
);

TraineeSchema.pre('save', function (next) {
    if (this.email) this.email = this.email.toLowerCase().trim();
    next();
});

TraineeSchema.statics.findByEmail = function (email) {
    return this.findOne({ email: (email || '').toLowerCase().trim() });
};

module.exports = mongoose.model('Trainee', TraineeSchema);

const Trainee = require('../model/trainee.model');

const root = {
  trainees: async () => {
    return await Trainee.find().lean();
  },

  traineeByEmail: async ({ email }) => {
    return await Trainee.findOne({ email: (email || '').toLowerCase().trim() }).lean();
  },

  createTrainee: async ({ input }) => {
    const t = new Trainee(input);
    return await t.save();
  }
};

module.exports = root;