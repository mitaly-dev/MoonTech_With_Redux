const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app =  express()
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ojtfupc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const db=client.db('MoonTech')
        const productCollection=db.collection('product')

        app.get('/products',async(req,res)=>{
            const cursor = await productCollection.find({})
            const products = await cursor.toArray()
            res.send(products)
        })
    }
   finally{

   }
}
run().catch(error=>console.error(error.message))

app.get('/',async(req,res)=>{
    res.send({name : 'mitlay'})
})

app.listen(port,()=>{
    console.log(`MoonTech is running on ${port}`)
})