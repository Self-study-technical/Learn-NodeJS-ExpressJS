const Course = require('../models/Course');
class SiteController {
 async index(req, res, next) {
  try {
   const courses = await Course.find({});
   res.json(courses);
  } catch (err) {
   next(err);
  }
 }

 search(req, res) {
  res.render('search');
 }
}

module.exports = new SiteController();
