import { addMessageBox, Message } from './utils/message';

export default () => {
  const cacheIvyOption = globalThis.$ivy;
  const message = Message;

  const conf = {
    ...cacheIvyOption,
    message,
  };
  globalThis.$ivy = conf;
  addMessageBox();
};
