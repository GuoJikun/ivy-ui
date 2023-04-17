import { addMessageBox, Message } from './utils/message';
import { addNotificationBox, Notification } from './utils/notification';

export default () => {
  const cacheIvyOption = globalThis.$ivy;
  const message = Message;

  const conf = {
    ...cacheIvyOption,
    message,
    Notification,
  };
  globalThis.$ivy = conf;
  addMessageBox();
  addNotificationBox();
};
