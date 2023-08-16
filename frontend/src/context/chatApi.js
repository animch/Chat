import { io } from 'socket.io-client';

const socket = io();

const emitPromise = (eventName, payload) => new Promise((resolve, reject) => {
  socket.emit(eventName, payload, (response) => {
    if (response.error) {
      console.error(response.error);
      reject(response.error);
    } else {
      resolve(response.data);
    }
  });
});

const chatApi = {
  sendMessage: (message) => emitPromise('newMessage', message),
  newChannel: (name) => emitPromise('newChannel', { name }),
  removeChannel: (id) => emitPromise('removeChannel', { id }),
  renameChannel: ({ name, id }) => emitPromise('renameChannel', { name, id }),
};

export default chatApi;
