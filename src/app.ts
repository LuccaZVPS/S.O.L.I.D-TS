import express,{ urlencoded} from 'express'
import allRoutes from './Routes'
class App{
    app
constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
}
middlewares(){
    this.app.use(express.urlencoded({extended:true}))
    this.app.use(express.json())
}

    routes(){
        this.app.use(allRoutes)
        
    }
  

}
export default new App().app