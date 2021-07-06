import express from 'express';
import { client } from '../utils/mqtt';
const app = express();

const router = express.Router();

// implement calling service
router.get('/publish', (req, res, next) => {
    client
    .publish('cloud2edge','test')
    .then(result => res.status(200).send(result))
    .catch(next)
});

module.exports = router;