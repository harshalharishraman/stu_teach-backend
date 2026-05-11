const exp = require('express');
const c=require('../controls/controller');

const router = exp.Router();

router.post('/ct/:rn',c.c_student);
router.get('/gtall',c.get_all);
router.get('/gt/:rn',c.getby_id);
router.put('/up/:rn',c.udtby_id);
router.delete('/d/:rn',c.get_all);

module.exports = router;