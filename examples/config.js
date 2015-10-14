import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<QueueAnim interval={100} delay={1000} duration={1000}>
  <div key="1">依次进入</div>
  <div key="2">依次进入</div>
  <div key="3">依次进入</div>
  <div key="4">依次进入</div>
  <div key="5">依次进入</div>
</QueueAnim>, document.getElementById('__react-content'));
