// // IPC communication helper
// function sendIpcMessage<T>(type: string, payload?: any): Promise<T> {
//   return new Promise((resolve) => {
//     const id = crypto.randomUUID();
//     const handler = (event: MessageEvent) => {
//       if (event.data?.id === id) {
//         window.removeEventListener('message', handler);
//         resolve(event.data.payload);
//       }
//     };
//     window.addEventListener('message', handler);
//     window.parent.postMessage({ type, id, payload }, '*');
//   });
// }

export const os = {
  setWindowTitle: (title: string): void => {
    window.parent.postMessage({ type: 'OS_SET_WINDOW_TITLE', payload: { title } }, '*');
  },
  device: {
    getMemory: (): number => (navigator as any).deviceMemory ?? 4,
    isOnline: (): boolean => navigator.onLine,
    getUserAgent: (): string => navigator.userAgent,
  },
};