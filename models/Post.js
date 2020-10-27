const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('./user');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        // define the Post schema by using sequelize 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // id becomes the primary key
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate directly in schema definition for post_url column
            validate: {
                isUrl: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
        // configure metadata including the naming conventions
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'post'
        }
    );

    module.exports = Post;