module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
      },
      dueDate: {
        type: DataTypes.DATE
      }
    });
  
    return Task;
  };
  