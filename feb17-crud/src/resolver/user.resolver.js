const User = require('../model/user.model');

const resolvers = {
    signUp: async ({ input }) => {
        const { email, password, role } = input;
        const existingUser = await User.findOne({ email: (email || '').toLowerCase().trim() });
        if (existingUser) {
            throw new Error('Email already in use');
        } else {
            const user = new User({ email, hashed_password: '', role });
            return await user.save();
        }
    }
};

module.exports = resolvers;