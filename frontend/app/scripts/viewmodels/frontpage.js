var viewModel = {
    status: ko.observable('ko activate!')
};

ko.applyBindings(viewModel, $('html')[0]);
