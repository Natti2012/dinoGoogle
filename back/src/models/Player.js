const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('player', {

  

player: {
    type: DataTypes.STRING,
    unique: true,
  },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

  },
  {
    timestamps: false
  }
  );
  
};
