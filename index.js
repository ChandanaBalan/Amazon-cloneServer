const jsonServer = require('json-server')

const amazonServer = jsonServer.create()

const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')

amazonServer.use(middleware)
amazonServer.use(router)

const PORT = 4000 || process.env.PORT

amazonServer.listen(PORT,()=>{
    console.log(`Server Running in Port : ${PORT}`);
    
})