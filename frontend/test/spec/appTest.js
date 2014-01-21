'use strict';

describe('AppTest', function () {

    it('Should setup namespacing for the app', function() {
        expect(cheesus).toBeDefined();
        expect(cheesus.models).toBeDefined();
        expect(cheesus.views).toBeDefined();
    });

});
