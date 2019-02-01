"use strict";
module.exports = (sequelize, DataTypes) => {
  const BooksInventory = sequelize.define(
    "BooksInventory",
    {
      isbn: DataTypes.INTEGER,
      bookCode: DataTypes.STRING,
      checkedOut: DataTypes.BOOLEAN,
      checkedOutDate: DataTypes.DATE,
      dueDate: DataTypes.DATE
    },
    {}
  );
  BooksInventory.associate = function(models) {
    // associations can be defined here
  };
  return BooksInventory;
};
