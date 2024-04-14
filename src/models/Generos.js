import { DataTypes } from 'sequelize'

/* Exportar la funcion para que sequelize cree la tabla */
// export const Genero = mySequelize.define('genero', {
export default function (sequelize) {
  return sequelize.define(
    'Generos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  )
}
