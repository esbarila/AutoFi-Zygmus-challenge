Cypress.Commands.add('goto', url => {
    return new Promise(res => {
      setTimeout(() => {
        const frame = window.top.document.getElementsByClassName('aut-iframe')[0];
        frame.src = url;
        var evt = window.top.document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
        res();
      }, 300);
    });
  });
