const express = require('express')
const app = express()
const shoppingRoutes = require('./routes/shoppingRoutes')

app.use(express.json())
app.use('/api/v1/items', shoppingRoutes)



const port = 3000
const begin = async () => {
    try {
        app.listen(port, console.log(`RUNNING ON PORT: ${port}`))
    } catch(error){
        console.log('CONNECTION ERROR')
    }
}

begin()