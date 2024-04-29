const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Plant, CareGiver } = require('./models');
const { body, param, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Create a plant with validation and caregiver association
app.post(
  '/plants',
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('species').not().isEmpty().withMessage('Species is required'),
    body('age').isInt({ gt: 0 }).withMessage('Age must be a positive integer'),
    body('careGiverId').isInt().withMessage('Valid CareGiver ID is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const plant = await Plant.create(req.body);
      res.status(201).send(plant);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

//get all plants
app.get('/plants', async (req, res) => {
  try {
    const plants = await Plant.findAll();
    res.send(plants);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get plant by id
app.get('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (plant) {
      res.send(plant);
    } else {
      res.status(404).send({ message: 'Plant not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a plant with validation and modify caregiver association
app.put(
  '/plants/:id',
  [
    param('id').isInt().withMessage('Invalid plant ID'),
    body('name').optional().not().isEmpty().withMessage('Name cannot be empty'),
    body('species')
      .optional()
      .not()
      .isEmpty()
      .withMessage('Species cannot be empty'),
    body('age')
      .optional()
      .isInt({ gt: 0 })
      .withMessage('Age must be a positive integer'),
    body('careGiverId')
      .optional()
      .isInt()
      .withMessage('Valid CareGiver ID is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const plant = await Plant.findByPk(req.params.id);
      if (plant) {
        await plant.update(req.body);
        res.send(plant);
      } else {
        res.status(404).send({ message: 'Plant not found' });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

//delete a plant
app.delete('/plants/:id', async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (plant) {
      await plant.destroy();
      res.send({ message: 'Plant deleted' });
    } else {
      res.status(404).send({ message: 'Plant not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a caregiver with validation
app.post(
  '/caregivers',
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('phoneNumber')
      .matches(/^\d{10}$/)
      .withMessage('Phone number must be 10 digits'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const careGiver = await CareGiver.create(req.body);
      res.status(201).send(careGiver);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  try {
    await sequelize.sync({ force: true }); //  true' when want to drop and recreate tables
    console.log('Database tables created/updated!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
