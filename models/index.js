const User = require('./User');
const Post = require('./Post');

// create associations 
// 1 to many relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// each post has a 1 to 1 relationship with user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
