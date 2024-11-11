import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = {
  login: async (usuario, clave) => {
    return new Promise((exito, error) => {
      if (usuario == 'Mario' && clave == 'Mario.rlv') {
        const token = 'authToken';
        AsyncStorage.setItem('authToken', token)
          .then(() => exito(token))
          .catch(err => error('Error al guardar el token'));
      } else {
        error('Usuario o contraseña incorrectos');
      }
    })
  },

  registro: async (usuario, clave, clave2) => {
    return new Promise((exito, error) => {
      if (usuario == 'Mario' && clave == 'Mario.rlv' && clave == clave2) {
        exito('Te has registrado guay');
      } else {
        error('No te has podido registrar');
      }
    })
  }
}