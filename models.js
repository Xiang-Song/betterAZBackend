const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('./db');

class Users extends Model {}

Users.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Users'
});

class News extends Model {}

News.init ({
    Headline:{
        type: DataTypes.STRING,
    },
   
    Textbody: {
        type: DataTypes.TEXT,
    },
    Date: {
        type: DataTypes.DATE,
    },
    Source: {
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'News' 
});

class Banner extends Model {}

Banner.init ({
    Headline:{
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'Banner' 
});

class Locations extends Model {}

Locations.init ({
    Location:{
        type: DataTypes.STRING,
    },
   
    Address: {
        type: DataTypes.STRING,
    },
    Hours: {
        type: DataTypes.STRING,
    },
    Days: {
        type: DataTypes.STRING,
    },
    Priority: {
        type: DataTypes.INTEGER,
    },
    County: {
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'Locations' 
});

class Events extends Model {}

Events.init ({
    Headline:{
        type: DataTypes.STRING,
    },
   
    Description: {
        type: DataTypes.TEXT,
    },
    Date: {
        type: DataTypes.DATE,
    },
    Time: {
        type: DataTypes.STRING,
    },
    Location: {
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'Events' 
});

sequelize.sync({alter:true});

module.exports = {Users, News, Banner, Locations, Events};

