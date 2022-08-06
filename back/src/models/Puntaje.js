const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('puntaje', {

    score: {
      type: DataTypes.INTEGER
    },

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    player: {
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false
    }
  );

};
