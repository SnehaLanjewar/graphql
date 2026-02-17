const User = require('../model/user.model');

const resolvers = {
    user: async ({ email }) => {
        return await User.findOne({ email: (email || '').toLowerCase().trim() });
    },
    users: async () => {
        return await User.find();
    },
    signUp: async ({ input }) => {
        const { email, password, role } = input;
        const existingUser = await User.findOne({ email: (email || '').toLowerCase().trim() });
        if (existingUser) {
            throw new Error('Email already in use');
        } else {
            const user = new User({ email, role });
            user.password = password;
            return await user.save();
        }
    }
};

module.exports = resolvers;