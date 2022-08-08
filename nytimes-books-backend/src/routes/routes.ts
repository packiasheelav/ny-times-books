import express from 'express';
import controller from '../controllers/nybooks';
const router = express.Router();

router.get('/names', controller.getNames);
router.get('/ranks/:list_name', controller.getTopRankBooks);
router.get('/reviews/:isbn', controller.getReviewsByISBN);

export = router;    