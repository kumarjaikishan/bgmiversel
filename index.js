const express = require('express');
const app = express();
const model = require('./conn/expschema')
const port = process.env.PORT || 5000;
const fileupload = require('express-fileupload')
const fs = require('fs');

app.use(express.json());
require('./conn/conn')
require('./test');

// if(process.env.NODE_ENV=='production'){
//     const path = require('path')

//     app.get('/',(req,res)=>{
//         app.use(express.static(path.resolve(__dirname,'client','build')))
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }else{
const path = require('path')




app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// }


//    for adding expense data into database
app.post('/addplayer', async (req, res) => {
    const { torunaname, name, id, date, stat } = req.body;
    // console.log(id)
    if (!torunaname || !name || !date || !id) {
        res.json({
            msg: "all fields are required"
        })
    } else {
        const query = new model({ torunaname, name, id, date, stat });
        const result = await query.save();
        if (result) {
            res.json({
                msg: "data inserted successfully"
            })
        } else {
            res.json({
                msg: "something went wrong in db"
            })
        }
    }
})
//    for adding expense data into database ends here

//    for approving/disapproveing database
app.post('/playerapprove', async (req, res) => {
    const { id, set } = req.body;
    // console.log(id + set)
    if(set=="delete"){
        const result = await model.findByIdAndDelete({ _id:id });
        if (result) {
            res.json({
                msg: "done",
                data: result
            })
        } else {
            res.json({
                msg: "something went wrong in db"
            })
        }
    }else{
        const result = await model.findByIdAndUpdate({ _id: id }, { stat: set });
        // console.log(result)
        if (result) {
            res.json({
                msg: "done",
                data: result
            })
        } else {
            res.json({
                msg: "something went wrong in db"
            })
        }
    }
   
})
//    for adding expense data into database ends here


//    for fetching all expense data from database
app.get('/getplayer', async (req, res) => {
    // const userid = req.body.userid;
    try {
        const result = await model.find();
        if (result) {
            res.json({
                msg: "data found",
                data: result
            })
        } else {
            res.json({
                msg: "something went wrong in db"
            })
        }
    } catch (error) {
        res.json({
            msg: "wrong",
            data: error
        })
    }
})

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})