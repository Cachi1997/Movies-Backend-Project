import { DataTypes } from 'sequelize'

/* Exportar la funcion para que sequelize cree la tabla */
// export const Pelicula = mySequelize.define('peliculas', {
export default function (sequelize) {
  return sequelize.define(
    'Peliculas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
      },
      calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  )
}
