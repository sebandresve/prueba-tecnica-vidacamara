import { body, param, query } from 'express-validator';

export const createPolicyValidator = [
  body('rutTitular').notEmpty().withMessage('El RUT es obligatorio'),
  body('fechaEmision')
    .isISO8601().withMessage('Fecha debe tener formato ISO (YYYY-MM-DD)'),
  body('planSalud').notEmpty().withMessage('El plan de salud es obligatorio'),
  body('prima').isFloat({ gt: 0 }).withMessage('La prima debe ser un número positivo'),
  body('estado')
    .optional()
    .isIn(['emitida', 'activa', 'anulada'])
    .withMessage('Estado no válido (emitida, activa, anulada)'),
];

export const updateStatusValidator = [
  param('id').isUUID().withMessage('ID inválido'),
];

export const getByIdValidator = [
  param('id').isUUID().withMessage('ID inválido'),
];

export const listPoliciesValidator = [
  query('estado').optional().isIn(['emitida', 'activa', 'anulada']),
  query('fechaEmision').optional().isISO8601(),
];