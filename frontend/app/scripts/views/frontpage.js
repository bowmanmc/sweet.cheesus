/**
 * FrontPage View Model
 * Backing model for path / or /index.html
 */

cheesus.views.frontpage = {
    status: ko.observable('ko activate!')
};

ko.applyBindings(cheesus.views.frontpage, $('html')[0]);
