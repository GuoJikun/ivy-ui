import { getType, isObject } from './utils';

type NotificationObject = {
  content: string;
  duration?: number;
  type?: string;
};

type Notification = NotificationObject | string;

export function Notification(opt: NotificationObject) {
  const defaultConf: NotificationObject = {
    type: 'info',
    content: '',
    duration: 3000,
  };

  const conf = {
    ...defaultConf,
    ...opt,
  };
  if (isObject(opt)) {
    const IvyMessage = globalThis.customElements.get('ivy-notification');
    if (IvyMessage) {
      const instance = new IvyMessage();
      const ivyBox = document.querySelector('#ivy-notification-box');
      (instance as any).content = conf.content || '';
      (instance as any).type = conf.type || 'info';
      ivyBox.appendChild(instance as unknown as Node);
      (instance as unknown as any).setAttribute('show', 'show');
      const timer = setTimeout(() => {
        // (instance as unknown as any).removeAttribute('show');
        ivyBox.removeChild(instance as unknown as Node);
        clearTimeout(timer);
      }, conf.duration);
    } else {
      throw new Error('请先引入ivyNotification组件');
    }
  } else {
    throw new Error('参数opt必须是Object');
  }
}
Notification.info = function (opt: Notification) {
  const typeStr = getType(opt);
  let conf: NotificationObject = {
    type: 'info',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as NotificationObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Notification(conf);
};

Notification.success = function (opt: Notification) {
  const typeStr = getType(opt);
  let conf: NotificationObject = {
    type: 'success',
    content: '',
    duration: 30000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as NotificationObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Notification(conf);
};

Notification.error = function (opt: Notification) {
  const typeStr = getType(opt);
  let conf: NotificationObject = {
    type: 'error',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as NotificationObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Notification(conf);
};

Notification.warning = function (opt: Notification) {
  const typeStr = getType(opt);
  let conf: NotificationObject = {
    type: 'warning',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as NotificationObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Notification(conf);
};

export function addNotificationBox() {
  if (!document.getElementById('ivy-message-box')) {
    const parent = document.createElement('div');
    parent.id = 'ivy-notification-box';
    parent.style.position = 'fixed';
    parent.style.top = '24px';
    parent.style.left = '0';
    parent.style.zIndex = '10000';
    parent.style.width = '0';
    parent.style.pointerEvents = 'none';
    parent.style.fontSize = '14px';
    document.body.appendChild(parent);
  }
}
