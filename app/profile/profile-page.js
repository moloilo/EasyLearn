const ProfileViewModel = require("./profile-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new ProfileViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
