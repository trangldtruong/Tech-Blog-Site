const router = require('express').Router();
const userRoutes = require('./dashboardRoutes');
const projectRoutes = require('../homeRoutes');

router.use('/users', userRoutes);
router.use('/post', projectRoutes);

module.exports = router;
