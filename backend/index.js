const jsonserver = require('json-server')


const schoolserver = jsonserver.create()

const middleware = jsonserver.defaults() 

const routes = jsonserver.router('db.json')

schoolserver.use(middleware)
schoolserver.use(routes)

PORT = 9000 || process.env.PORT


schoolserver.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
    
})