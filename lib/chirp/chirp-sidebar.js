const ChirpSidebarTemplate = require('./chirp-sidebar.template');

module.exports = ChirpSidebar = {

  render(app, mod) {

    if (!document.querySelector(".chirp-sidebar")) { app.browser.prependElementToDom(ChirpSidebarTemplate()); }

    //
    // render chat if we have any such modules installed
    //
    app.modules.respondTo("email-chat").forEach(module => {
      if (module != null) {
        module.respondTo('email-chat').render(app, module);
      }
    });

  },

  
  attachEvents(app, mod) {
  
    //
    // let chat module work its wonders
    //
    app.modules.respondTo("email-chat").forEach(module => {
      module.respondTo('email-chat').attachEvents(app, mod);
    });

  }

}

