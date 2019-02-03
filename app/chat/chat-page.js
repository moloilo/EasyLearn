const ChatViewModel = require("./chat-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ChatViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
