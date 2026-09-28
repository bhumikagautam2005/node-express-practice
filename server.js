const express = require('express')
const app = express()  //server create- bas express call kardo 

app.use(express.json()); //express(server) req.body ka data read nhi kar pata  isliye undefined milta h on terminal so app.use middleware ka use kiya hai

let notes = []   //server restart par notes array wapas empty par set ho jata hai
// POST method
app.post('/notes', (req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message:"Note Added Successfully",
        notes:notes
    })
})

// GET Method
app.get('/notes', (req,res)=>{
    res.json(notes);
})

// PATCH Method
app.patch("/notes/:index", (req,res)=>{
    const index = req.params.index
    const{title} = req.body
    notes[index].title = title

    res.json({
        message:"note updated successfully",
    })
})
// DELETE Method
app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"note deleted successfully",
    })

})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});