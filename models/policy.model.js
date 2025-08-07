import db from '../db/database.js';

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS policies (
      id TEXT PRIMARY KEY,
      rutTitular TEXT NOT NULL,
      fechaEmision TEXT NOT NULL,
      planSalud TEXT NOT NULL,
      prima REAL NOT NULL,
      estado TEXT CHECK(estado IN ('emitida', 'activa', 'anulada')) NOT NULL
    )
  `);
});

export default db;