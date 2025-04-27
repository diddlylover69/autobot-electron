const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getPlan: (prompt) => ipcRenderer.invoke('get-plan', prompt),
  executeStep: (step) => ipcRenderer.invoke('execute-step', step)
});
