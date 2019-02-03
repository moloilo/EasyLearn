const LearnViewModel = require("./learn-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new LearnViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
