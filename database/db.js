import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('VitalPower');

const consultas = {
  // Crear la base de datos y las tablas si no existen
  create: () => {
    db.transaction(tx => {
      tx.executeSql('PRAGMA journal_mode = WAL;');
      tx.executeSql('PRAGMA foreign_keys = ON;');

      // Crear tabla usuarios si no existe
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          clave TEXT NOT NULL,
          edad INTEGER,
          peso REAL,
          altura REAL,
          genero TEXT
        );
        CREATE TABLE IF NOT EXISTS ejercicios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          musculo TEXT NOT NULL,
        );
      `);

      // Verificar si la bbdd ya tiene datos
      tx.executeSql(`
        SELECT COUNT(*) as count FROM ejercicios;
      `, [], (_, result) => {
        const count = result.rows._array[0].count;

        // insertar datos predefinidos
        if (count === 0) {
          tx.executeSql(`
            INSERT INTO ejercicios VALUES 
              ('Remo', 'Infraespinoso'),
              ('Jalón al pecho', 'Dorsal ancho');
          `);
          console.log('Datos predefinidos insertados.');
        }
      });
    }, 
    (error) => {
      console.error('Error al inicializar la base de datos:', error);
    }, 
    () => {
      console.log('Base de datos inicializada correctamente.');
    });
  },







/* HAY QUE VER ESTO */


 /* // Función para insertar usuarios (esto ya no se ejecutará durante la creación)
  insert: (usuario) => {
    return new Promise((resolve, reject) => {
      const { nombre, clave, edad, peso, altura, genero } = usuario;

      db.transaction((tx) => {
        tx.executeSql(
          `
          INSERT INTO usuarios (nombre, clave, edad, peso, altura, genero) 
          VALUES (?, ?, ?, ?, ?, ?);
          `,
          [nombre, clave, edad, peso, altura, genero],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
  },

  // Consultar usuarios
  select: (filters = {}) => {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM usuarios`;
      const params = [];

      // Si hay filtros, agréguelos a la consulta
      if (filters.nombre) {
        query += ` WHERE nombre = ?`;
        params.push(filters.nombre);
      }

      db.transaction((tx) => {
        tx.executeSql(
          query,
          params,
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  },

  // Actualizar un usuario
  update: (id, nuevosDatos) => {
    return new Promise((resolve, reject) => {
      const { nombre, clave, edad, peso, altura, genero } = nuevosDatos;

      db.transaction((tx) => {
        tx.executeSql(
          `
          UPDATE usuarios
          SET nombre = ?, clave = ?, edad = ?, peso = ?, altura = ?, genero = ?
          WHERE id = ?;
          `,
          [nombre, clave, edad, peso, altura, genero, id],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
  },

  // Eliminar un usuario
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `
          DELETE FROM usuarios WHERE id = ?;
          `,
          [id],
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
  }*/
};

export default consultas;
