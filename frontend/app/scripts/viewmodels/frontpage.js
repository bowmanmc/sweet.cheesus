/**
 * FrontPage View Model
 * Backing model for path / or /index.html
 */
var fpViewModel = {
    status: ko.observable('ko activate!')
};

ko.applyBindings(fpViewModel, $('html')[0]);
