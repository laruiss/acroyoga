import { DataTypes } from 'sequelize'
import { sequelize } from '../db.ts'

export const Figure = sequelize.define('User', {
  // Model attributes are defined here
  porteur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voltigeur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  id: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
})
