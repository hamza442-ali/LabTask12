const router = require('express').Router();
// let User = require('../models/User');
const mongoose = require('mongoose');


const app = express();

const port = 3001
app.listen(port, () => {
  console.log(`Application is running on port:  ${port}`)
})

mongoose.connect("mongodb://localhost:27017/labtask12" , {useNewUrlParser :true});


const labtask = new  mongoose.Schema({

  Name: String,
  Email: String,
  Age: String,
  Contact: String,
 
});

const User=mongoose.model("Lab",labtask);

router.route('/add').post((req, res) => {
     Name = req.body.Name;
     Email = req.body.Email;
     Age = (req.body.Age);
     Contact = (req.body.Contact);
     newUser = new User({
      Name,
      Email,
      Age,
      Contact,
    });
  
    newUser.save()
    .then(() => res.send("200"))
    .catch(err => res.status(400).json('Error: ' + err));
  });




  router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
  });

  module.exports = router;