const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('./db');


class News extends Model {

}

News.init ({
    Headline:{
        type: DataTypes.STRING,
    },
   
    Textbody: {
        type: DataTypes.STRING,
    },
    Date: {
        type: DataTypes.DATE,
    },
    Source: {
        type: DataTypes.STRING,
    }
},{
    sequelize, // We need to pass the connection instance
    modelName: 'News' // We need to choose the model name
});

sequelize.sync({alter:true});

module.exports = { News };