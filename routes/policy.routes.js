import { Router } from 'express';
import {
  create,
  getAll,
  getById,
  updateStatus
} from '../controllers/policy.controller.js';

import {
  createPolicyValidator,
  updateStatusValidator,
  getByIdValidator,
  listPoliciesValidator
} from '../validators/policy.validator.js';

import { validateRequest } from '../middlewares/validateRequest.js';

const router = Router();

router.post('/', createPolicyValidator, validateRequest, create);
router.get('/', listPoliciesValidator, validateRequest, getAll);
router.get('/:id', getByIdValidator, validateRequest, getById);
router.put('/:id/status', updateStatusValidator, validateRequest, updateStatus);

export default router;
