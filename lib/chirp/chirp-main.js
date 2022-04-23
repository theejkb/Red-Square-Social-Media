const ChirpMainTemplate = require("./chirp-main.template");

module.exports = ChirpMain = {

  render(app, mod) {
   
    if (!document.querySelector(".chirp-main")) {
      app.browser.addElementToDom(ChirpMainTemplate(app, mod), "chirp-container");
    }

    try {
    
      //
      // fetch any usernames needed
      //
      app.browser.addIdentifiersToDom();

    } catch (err) {
      console.error(err);
    }
  },

  attachEvents(app, mod) {
  },

};
