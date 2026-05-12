const exp = require('express');
const c=require('../controls/controller');

const router = exp.Router();

router.post('/ct/:roll_no',c.c_student);
router.get('/gtall',c.g_all);
router.get('/gt/:roll_no',c.gby_rn);
router.put('/up/:roll_no',c.udtby_rn);
router.delete('/d/:roll_no',c.dby_rn);
router.delete('/d',c.d_all);

module.exports = router;