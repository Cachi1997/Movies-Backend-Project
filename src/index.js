import app from './app.js'
import models from './models/index.js'

/* PUERTO DEL SERVIDOR */
const PORT = process.env.PORT ?? 3000

async function main () {
  try {
    await models.mySequelize.sync() // Crea todas las tablas, si ya existen no hace nada
    /* Para testear la conexion */
    // await mySequelize.authenticate()
    // console.log('Connection has been established successfully.')
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
