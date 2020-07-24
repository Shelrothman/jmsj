module.exports = function(sequelize, DataTypes) {
  const Binge = sequelize.define("Binge", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    watching: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },

    watched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

  return Binge;
};
