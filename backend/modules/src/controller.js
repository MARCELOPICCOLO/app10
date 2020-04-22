

const usersSchema = require('../models/UserSchema')
const booksSchema = require('../models/BookSchema')
const pagesSchema = require('../models/PageSchema')
const mongoose = require('mongoose')


//all
const all = async (req, res)=>{
    const data = await usersSchema.find()
    return res.json(data)
}

//findById
/*const findById = async (req, res)=>{
    const {id} = req.params
    const model = await usersSchema
                    .findById({id})
                    .populate('books','title desc dateAt pages')
                    .populate({path:'pages', model:'Pages'})
    
    if(!model){
        return res.status(404).send('o modelo nao foi encontrado')
    }
    else
        return res.json(model)
}*/

//findByEmail
const findByEmail = async(req, res)=>{
    const {email, password} = req.body
    const data = await usersSchema.findOne({email:email})
    return res.json(data)  
    
}

/*const findByUser = async(req,res)=>{
    const data = await usersSchema.findOne({email: 'marcelo@hotmail.com'})
    return res.json(data)
}*/

/*



//save
const save = async (req, res)=>{
    const {id} = req.params
    const {body} = req
    if(id){
        await userSchema.updateOne({_id: id}, {$set : body})
        const model = await userSchema.findById(id)
        return res.status(202).send(model)
    }
    else{
        const pk = new userSchema(body)
        await pk.save()
        return res.status(201).send(pk)
    }
}

//delete
const remove = async (req, res)=>{
    const {id} = req.params
    await userSchema.deleteOne({_id : id})
    return res.status(204).send('model removed success')
}

const saveTeste =  async (req, res)=>{
    
  
    await booksSchema.create({
        _id:  new mongoose.Types.ObjectId(),
        title:'Treinar Bolero',
        desc:'revisar o curso de Bolero Avançado',
        datAt: Date.now(),
        idUser: await usersSchema.findById({_id: '5e908930128dd121ec0983e3'})       
    })

    /*await pagesSchema.create({
        _id:  new mongoose.Types.ObjectId(),
        titlePage:'verbs',
        text:'o shum bagunçava com o pano de chão',
        bookIn: await booksSchema.findById({_id:'5e908b3b2d13df235461d962'})      
    })

   // await usersSchema.updateOne({_id: '5e908930128dd121ec0983e3'},{books: await booksSchema.find({idUser:'5e908930128dd121ec0983e3'})})
        await booksSchema.updateOne({_id:'5e908b3b2d13df235461d962'}, {pages: await pagesSchema.find({bookIn:'5e908b3b2d13df235461d962'})})
    res.json({data:await (await usersSchema.findById({_id: '5e908930128dd121ec0983e3'}).populate('books')).populate({path:'pages', model:'Pages'})})
}*/


module.exports = {
    all,
   // findById,
    /*save,
    remove,*/
    //saveTeste
    findByEmail,
   // findByUser
}

 