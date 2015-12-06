'use strict';

describe('Controller: StoryboardCtrl', function () {

    // load the controller's module
    beforeEach(module('trelloCloneApp.storyboard'));

    var StoryboardCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        StoryboardCtrl = $controller('StoryboardCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should attach the hello message to the scope', function () {
        expect(scope.helloStoryboard.length).toBe(17);
    });
});
