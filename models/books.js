"use strict";
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      bookName: DataTypes.STRING,
      author: DataTypes.STRING,
      publisher: DataTypes.STRING
    },
    {}
  );
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};
