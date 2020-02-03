const http = require('http')
const port = 3000
const faker = require('faker')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write("Bienvenid@s a nuestra web")
        res.end()
    }

    else if (req.url === '/nosotros') {
        res.write("Este es nuestro catálogo")
        res.end()
    }

    else if (req.url === '/tunombre') {
        res.write(`<h1>Tu nombre en inglés es: ${faker.name.findName()} y vivrás en ${faker.address.state()}</h1>`)
        res.end()
    }

    else {
        res.statusCode = 404
        res.write(`La página ${req.url} no existe...`)
        res.end()
    }
})

server.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`))