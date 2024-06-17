import { initialize, close } from '../config/mySqlConfig.js';

export async function getLogsFromView() {
  let conn;
  try {
    conn = await initialize();
    const [rows] = await conn.query('SELECT * FROM vista_logs');
    return rows;
  } catch (error) {
    console.error('Error al obtener los logs desde la vista:', error);
    throw error;
  } finally {
    if (conn) {
      await close(conn);
    }
  }
}