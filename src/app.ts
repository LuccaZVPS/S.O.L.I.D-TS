import express,{Router, urlencoded} from 'express'
class App{
    app
constructor(){
    this.app = express()
    this.middlewares
    this.routes()
}

    routes(){
        this.app.get("/", (req,res) => {
            res.send("test")
        })
        
    }
    middlewares(){
        this.app.use(urlencoded({extended:true}))
        this.app.use(express.json())
    }

}
export default new App().app