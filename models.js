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
    },
    ImageLink: {
        type: DataTypes.STRING,
    },
    VideoLink: {
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
    },
    notary: {
        type:DataTypes.INTEGER,
    },
    petition: {
        type:DataTypes.INTEGER,
    }
},{
    sequelize, 
    modelName: 'Events' 
});

class Twitter extends Model {}

Twitter.init({
    twitter: {
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'Twitter' 
})

sequelize.sync({alter:true});

class Facebook extends Model {}

Facebook.init({
    facebook: {
        type: DataTypes.STRING,
    }
},{
    sequelize, 
    modelName: 'Facebook' 
})

sequelize.sync({alter:true});

module.exports = {Users, News, Banner, Locations, Events, Twitter, Facebook};

