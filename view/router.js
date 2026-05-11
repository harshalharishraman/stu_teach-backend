const exp = require('express');
const c=require('../controls/controller');

const router = exp.Router();

router.post('/ct/:rn',c.c_student);
router.get('/gtall',c.g_all);
router.get('/gt/:rn',c.gby_rn);
router.put('/up/:rn',c.udtby_rn);
router.delete('/d/:rn',c.dby_rn);
router.delete('/d',c.d_all);

module.exports = router;