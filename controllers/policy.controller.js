import { v4 as uuidv4 } from 'uuid';
import db from '../models/policy.model.js';

export const create = (req, res) => {
  const { rutTitular, fechaEmision, planSalud, prima, estado = 'emitida' } = req.body;
  const id = uuidv4();

  db.run(
    `INSERT INTO policies (id, rutTitular, fechaEmision, planSalud, prima, estado)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [id, rutTitular, fechaEmision, planSalud, prima, estado],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id, rutTitular, fechaEmision, planSalud, prima, estado });
    }
  );
};

export const getAll = (req, res) => {
  const { estado, fechaEmision } = req.query;
  let sql = 'SELECT * FROM policies WHERE 1=1';
  const params = [];

  if (estado) {
    sql += ' AND estado = ?';
    params.push(estado);
  }

  if (fechaEmision) {
    sql += ' AND fechaEmision = ?';
    params.push(fechaEmision);
  }

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const getById = (req, res) => {
  db.get('SELECT * FROM policies WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Póliza no encontrada' });
    res.json(row);
  });
};

export const updateStatus = (req, res) => {
  const { id } = req.params;

  db.get('SELECT estado FROM policies WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Póliza no encontrada' });

    let nextEstado;
    switch (row.estado) {
      case 'emitida':
        nextEstado = 'activa';
        break;
      case 'activa':
        nextEstado = 'anulada';
        break;
      case 'anulada':
        return res.status(400).json({ error: 'La póliza ya está anulada' });
    }

    db.run('UPDATE policies SET estado = ? WHERE id = ?', [nextEstado, id], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, nuevoEstado: nextEstado });
    });
  });
};