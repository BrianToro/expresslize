module.exports = (sequelize, DataType) => {
  const message = sequelize.define(
    'message',
    {
      message: {
        field: 'message',
        type: DataType.STRING,
        allowNull: false,
      },
      from: {
        field: 'from',
        type: DataType.STRING,
        allowNull: false,
      },
      to: {
        field: 'to',
        type: DataType.STRING,
        allowNull: false,
      },
      priority: {
        field: 'priority',
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'normal',
      },
      createdAt: {
        field: 'created_at',
        type: DataType.DATE,
        defaultValue: sequelize.NOW,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataType.DATE,
        defaultValue: sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
      hooks: {},
    },
  );

  return message;
};
