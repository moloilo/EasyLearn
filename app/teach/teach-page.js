const TeachViewModel = require("./teach-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new TeachViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
