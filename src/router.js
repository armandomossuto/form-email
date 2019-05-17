import { Router } from 'express';
import { sendEmail } from 'controller/index'
 
let router = new Router();

router.post('/contact', sendEmail);

export default router;
