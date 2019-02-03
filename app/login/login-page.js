var dialogsModule = require("tns-core-modules/ui/dialogs");
var frameModule = require("tns-core-modules/ui/frame");
var page;
var email;
var UserViewModel = require("./login-view-model");
//var user = new UserViewModel();
var user = new UserViewModel({
    email: "user@nativescript.org",
    password: "password"
});

exports.loaded = function (args) {
    page = args.object;
    page.actionBarHidden = true;
    isLoggingIn = user.isLoggingIn;
    page.bindingContext = user;
};

exports.toggleDisplay = function () {
    isLoggingIn = !isLoggingIn;
    user.set('isLoggingIn', isLoggingIn);
};

function submit(args) {
     if (isLoggingIn) {
        login(args);
    } else {
        signUp();
    }
};

function login(args) {
    user.login()
        .catch(function (error) {
            const button = args.object;
            button.page.frame.navigate({ moduleName: "tabs/tabs-page", clearHistory: true });
            /*dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();*/
        })
        .then(function () {
            const button = args.object;
            button.page.frame.navigate({ moduleName: "tabs/tabs-page", clearHistory: true });
        });
};

function signUp() {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () {
                    exports.toggleDisplay();
                });
        }).catch(function (error) {
        dialogsModule
            .alert({
                message: "Unfortunately we were unable to create your account.",
                okButtonText: "OK"
            });
    });
};

exports.submit = submit;