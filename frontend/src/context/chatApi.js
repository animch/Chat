import { io } from 'socket.io-client';
import store, { actions } from '../slices/index.js';

const {
  addMessage,
  addChannel,
  deleteChannel,
  channelRename,
} = actions;

const { dispatch } = store;

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

socket.on('newMessage', (payload) => {
  dispatch(addMessage(payload));
});
socket.on('newChannel', (payload) => {
  dispatch(addChannel(payload));
});
socket.on('removeChannel', (payload) => {
  dispatch(deleteChannel(payload));
});
socket.on('renameChannel', (payload) => {
  dispatch(channelRename(payload));
});

export default chatApi;
