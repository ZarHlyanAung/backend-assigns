## Green Project
### Overview
The Green Project is an Express.js application designed to manage information about plants and their caregivers. It leverages Sequelize as an ORM to interact with a MySQL database, ensuring robust data management and operations. This application supports basic CRUD operations for plants and caregivers, allowing users to add, retrieve, update, and delete information easily through a RESTful API.

### Features
Manage plant data including names, species, and age.
Handle caregiver data with details such as name and phone number.
Associate plants with caregivers, demonstrating a one-to-many relationship.
Full CRUD capabilities for both plants and caregivers via RESTful endpoints.

### Plants
```
POST /plants - Create a new plant
GET /plants - Retrieve all plants
GET /plants/:id - Retrieve a single plant by its ID
PUT /plants/:id - Update an existing plant
DELETE /plants/:id - Delete a plant
```

### Caregivers
```
POST /caregivers - Create a new caregiver
GET /caregivers - Retrieve all caregivers
```

### Future Plans
The Green Project is a work in progress, and there are plans to expand its functionality in the future. Some potential