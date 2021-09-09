const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../model/Gig');

// GET gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      res.render('gigs', {
        gigs,
      });
    })
    .catch((err) => console.log(err))
);

// Display add gig form

// Add a gig list
router.post('/add', (req, res) => {
  const data = {
    title: 'Simple WP website',
    technologies: 'Php, html, css',
    budget: '$1000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
    contact_email: 'some@gmail.com',
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into Tablets
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email,
  })
    .then((gig) => res.redirect('/gigs'))
    .catch((err) => console.log(err));
});

module.exports = router;
