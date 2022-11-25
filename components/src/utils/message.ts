import { getType, isObject } from './utils';

type MessageObject = {
  content: string;
  duration?: number;
  type?: string;
};

type Message = MessageObject | string;

export function Message(opt: MessageObject) {
  const defaultConf: MessageObject = {
    type: 'info',
    content: '',
    duration: 3000,
  };

  const conf = {
    ...defaultConf,
    ...opt,
  };
  if (isObject(opt)) {
    const IvyMessage = globalThis.customElements.get('ivy-message');
    if (IvyMessage) {
      const instance = new IvyMessage();
      const ivyBox = document.querySelector('#ivy-message-box');
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
      throw new Error('请先引入ivyMessage组件');
    }
  } else {
    throw new Error('参数opt必须是Object');
  }
}
Message.info = function (opt: Message) {
  const typeStr = getType(opt);
  let conf: MessageObject = {
    type: 'info',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as MessageObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Message(conf);
};

Message.success = function (opt: Message) {
  const typeStr = getType(opt);
  let conf: MessageObject = {
    type: 'success',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as MessageObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Message(conf);
};

Message.error = function (opt: Message) {
  const typeStr = getType(opt);
  let conf: MessageObject = {
    type: 'error',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as MessageObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Message(conf);
};

Message.warning = function (opt: Message) {
  const typeStr = getType(opt);
  let conf: MessageObject = {
    type: 'warning',
    content: '',
    duration: 3000,
  };
  if (typeStr === 'String') {
    conf = { ...(conf as MessageObject), content: opt as string };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Message(conf);
};

export function addMessageBox() {
  if (!document.getElementById('ivy-message-box')) {
    const parent = document.createElement('div');
    parent.id = 'ivy-message-box';
    parent.style.position = 'fixed';
    parent.style.top = '24px';
    parent.style.left = '0';
    parent.style.zIndex = '10000';
    parent.style.width = '100%';
    parent.style.pointerEvents = 'none';
    parent.style.fontSize = '14px';
    document.body.appendChild(parent);
  }
}
