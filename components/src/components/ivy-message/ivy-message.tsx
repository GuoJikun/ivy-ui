import { Component, Host, h, Prop } from '@stencil/core';
import { getType, isObject } from '../../utils/utils';

type MessageObject = {
  content: string;
  duration?: number;
  type?: string;
};

type Message = MessageObject | string;

@Component({
  tag: 'ivy-message',
  styleUrl: 'ivy-message.css',
  shadow: true,
})
export class IvyMessage {
  @Prop() content: string;

  render() {
    return (
      <Host>
        <div class="message">
          {/* <ivy-icon name="info" class="message-icon"></ivy-icon> */}
          <div class="message-content">{this.content}</div>
        </div>
      </Host>
    );
  }
}

function Message(opt: MessageObject) {
  if (isObject(opt)) {
    const instance = new IvyMessage();
    const ivyBox = document.querySelector('#ivy-message-box');
    instance.content = opt.content || '';
    ivyBox.appendChild(instance as unknown as Node);
    (instance as unknown as any).setAttribute('show', 'show');
    const timer = setTimeout(() => {
      ivyBox.removeChild(instance as unknown as Node);
      clearTimeout(timer);
    }, opt.duration);
  } else {
    throw new Error('');
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
    conf = { content: opt, ...conf };
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
    conf = { content: opt, ...conf };
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
    conf = { content: opt, ...conf };
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
    conf = { content: opt, ...conf };
  } else if (typeStr === 'Object') {
    conf = { ...(opt as object), ...conf };
  } else {
    throw new Error('');
  }
  Message(conf);
};

(function (globalThis) {
  function addMessageBox() {
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
  console.log('123123');
  const $ivy = globalThis.$ivy;
  if ($ivy) {
    globalThis.$ivy.message = Message;
  } else {
    globalThis.$ivy = {
      message: Message,
    };
  }
  addMessageBox();
})(globalThis || window);
