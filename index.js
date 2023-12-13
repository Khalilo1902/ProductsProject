import express from "express"
import dbConnect from "./config/dbConnect.js"
import dotenv from "dotenv"
import cors from "cors"
import productRouter from "./router/productRouter.js"

dotenv.config()




dbConnect()

const app = express()

app.use(express.json())
app.use(cors())

app.use(productRouter)



const PORT = process.env.PORT | 3008


app.listen(PORT,console.log(`Server is running in PORt ${PORT}`))

