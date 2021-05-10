const db = require("../models");

//Defining methods for userController
module.exports = {
    create: function(req,res) {
               db.Med.create(req.body).then(function(results){
                 res.json(results)
               });
    },
    findAll: function(req,res) {
        db.Med.find()
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(422).json(err);
        });
    },
    findByID: function(req,res) {
      db.Med.findOne({_id:req.params.id})
      .then(dbUser => {
          res.json(dbUser);
      })
      .catch(err => {
          res.status(422).json(err);
      });
  },
    // populate: function(req, res) {
    //     db.User.find({})
    //     .populate("symptoms")
    //     .then(dbUser => {
    //       res.json(dbUser);
    //     })
    //     .catch(err => {
    //       res.json(err);
    //     });
    // },
}

