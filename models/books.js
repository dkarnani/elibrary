"use strict";
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      isbn: DataTypes.INTEGER,
      bookName: DataTypes.STRING,
      author: DataTypes.STRING,
      publisher: DataTypes.STRING,
      imageLink: DataTypes.STRING
    },
    {}
  );
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};
