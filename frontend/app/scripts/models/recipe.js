/**
 * Recipe model
 *
 */
(function(models) {

    function Recipe() {
        var self = this;

        self.name = ko.observable('');
        self.description = ko.observable('');
        self.author = ko.observable('');
        self.dateCreated = ko.observable(new Date());
    };

    models.Recipe = Recipe;

} (cheesus.models));
