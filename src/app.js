import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.get('/',(_,res)=>{
    return res.status(200).json({
        message:'From Server',
        success:true
    })
})
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions)); 

export default {app}
