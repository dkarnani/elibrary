"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      studentID: DataTypes.INTEGER,
      isbn: DataTypes.INTEGER,
      bookCode: DataTypes.STRING,
      checkedOutDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      returnDate: DataTypes.DATE
    },
    {}
  );
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};
