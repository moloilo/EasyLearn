const observableModule = require("tns-core-modules/data/observable");

function ProfileViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = ProfileViewModel;
