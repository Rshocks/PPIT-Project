const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//from express docs
//leading it to the build folder as well as the static folder config lines
app.use(express.static(path.join(__dirname,'../build')));
app.use('/static', express.static(path.join(__dirname,'build/static')));


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const ConnectionString ='mongodb+srv://admin:admin@cluster0.eo9g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(ConnectionString, {useNewUrlParser: true});
  

const Schema = mongoose.Schema;

var storySchema = new Schema({
    Title:String,
    Author:String,
    Story:String
});

var StoryModel = mongoose.model("story", storySchema)

app.get('/api/story', (req, res)=>{

    StoryModel.find((err, data)=>{
        res.json(data); //sending back json from storymodel
    })

})

//IMPORTANT search for id maybe for search bar
app.get('/api/story/:id', (req,res)=>{
    console.log(req.params.id)

    StoryModel.findById(req.params.id, (err, data)=>{
        res.json(data)
    })
})

app.put('/api/story/:id', (req,res)=>{
    console.log("Update Story " + req.params.id)
    console.log(req.body);

    StoryModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.post('/api/story', (req, res)=>{
    console.log('Story Recieved');
    console.log(req.body.Title);
    console.log(req.body.Author);
    console.log(req.body.Story);

    StoryModel.create({
        Title:req.body.Title,
        Author:req.body.Author,
        Story:req.body.Story
    })

    res.send('Item Added')
})

app.delete('api/story/:id',(req,res)=>{
    console.log("Delete Story: "+ req.params.id);

    StoryModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.send(error)
            res.send(data)
        })
})

//send index.html file back
//by using * sends all frontend 
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'../build/index.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})