
const express = require('express');
const { check } = require('express-validator');
const { submitContactForm } = require('../controllers/contact.controller');
const { validateRequest } = require('../middleware/validate');

const router = express.Router();

router.post(
  '/submit',
  [
    check('name').trim().notEmpty().withMessage('Le nom est requis'),
    check('email').isEmail().withMessage('Email invalide'),
    check('message').trim().notEmpty().withMessage('Le message est requis'),
    validateRequest
  ],
  submitContactForm
);

module.exports = router;
