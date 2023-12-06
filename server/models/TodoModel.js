import { default as sequelizePostgres } from '../conf/sequelizePostgres.js'
import { DataTypes } from 'sequelize'

const TodoModel = sequelizePostgres.define(
  'todo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
  },
  {
    schema: 'todo_app_schema',
    timestamps: false, // Disable timestamps for this model
  }
)

export default TodoModel
