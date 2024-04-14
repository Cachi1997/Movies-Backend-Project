// models/index.js
import { mySequelize } from '../database/database.js'
import Personajes from './Personajes.js'
import Generos from './Generos.js'
import Peliculas from './Peliculas.js'

const models = {
  Personajes: Personajes(mySequelize),
  Generos: Generos(mySequelize),
  Peliculas: Peliculas(mySequelize),
  mySequelize
}

export default models
