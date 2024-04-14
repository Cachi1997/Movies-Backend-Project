import { DataTypes } from 'sequelize'

/* Exportar la funcion para que sequelize cree la tabla */

export default function (sequelize) {
  return sequelize.define(
    'Personajes',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      peso: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      historia: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  )
}
