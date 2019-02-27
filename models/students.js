"use strict";
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Students",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      studentID: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      grade: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};
