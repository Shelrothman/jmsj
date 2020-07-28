module.exports = function(sequelize, DataTypes) {
  const Binge = sequelize.define("Binge", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false
    },
    presentlyWatching: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alreadyWatched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Binge.associate = function(models) {
    Binge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Binge;
};
