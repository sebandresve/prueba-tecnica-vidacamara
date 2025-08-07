import { Router } from 'express';
import {
  create,
  getAll,
  getById,
  updateStatus
} from '../controllers/policy.controller.js';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id/status', updateStatus);

export default router;