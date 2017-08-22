fdescribe('autosaving notes', () => {
    let server, app;
    const {expectElement, type} = testRunner.actions;

    beforeEach(() => {
        app = testRunner.app(['autosavingNotes']);
        server = testRunner.http();
    });

    afterEach(() => {
        server.stop();
    });

    angular.module('autosavingNotes', [])
        .component('autosavingNotes', {
            template: `
                        <div class="autosaving-notes">
                            <div class="autosaving-notes-header">
                                <div class="autosaving-notes-header__label">Notes</div>
                                <div class="autosaving-notes-header__indicator" ng-bind="ctrl.indicator"></div>
                                <div class="autosaving-notes-header__counter-label">characters left</div>
                                <div class="autosaving-notes-header__counter" ng-bind="ctrl.counter()"></div>
                            </div>
                            <textarea class="autosaving-notes__textarea" ng-model="ctrl.model" ng-change="ctrl.save()"></textarea>
                        </div>`,
            controller: AutosavingNotesController,
            controllerAs: 'ctrl'
        });

    function AutosavingNotesController($http) {
        const self = this;
        self.model = '';
        self.indicator = 'Saved.';
        self.counter = () => 1000 - self.model.length;
        self.save = () => {
            self.indicator = 'Saving...';
            $http.put('/my/endpoint', {notes: self.model})
                .then(() => self.indicator = 'Saved.')
                .catch(() => self.indicator = 'Not saved.')
        };
    }

    it('show "Not saved" indicator when saving on server failed', () => {
        server = testRunner.http({respondImmediately: false});
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');
        server.put('/my/endpoint', req => req.sendStatus(500));

        html.perform(
            type('My notes').in('.autosaving-notes__textarea'),
            server.respond
        );

        html.verify(
            expectElement('.autosaving-notes-header__indicator').toHaveText('Not saved.')
        );
    });

    it('show Saving indicator while saving on server in progress', () => {
        server = testRunner.http({respondImmediately: false});
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');
        server.put('/my/endpoint', req => req.sendStatus(200));

        html.perform(
            type('My notes').in('.autosaving-notes__textarea')
        );

        html.verify(
            expectElement('.autosaving-notes-header__indicator').toHaveText('Saving...')
        );
    });

    it('show saved indicator after saving on server', () => {
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');
        server.put('/my/endpoint', req => req.sendStatus(200));

        html.perform(
            type('My notes').in('.autosaving-notes__textarea')
        );

        html.verify(
            expectElement('.autosaving-notes-header__indicator').toHaveText('Saved.')
        );
    });

    it('save on server after typing', () => {
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');
        let body;
        server.put('/my/endpoint', req => {
            body = req.body();
            req.sendStatus(200);
        });

        html.perform(
            type('My notes').in('.autosaving-notes__textarea')
        );

        expect(body).toEqual({notes: 'My notes'});
    });

    it('decrease number of chars while typing', () => {
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');

        html.perform(
            type('My notes').in('.autosaving-notes__textarea')
        );

        html.verify(
            expectElement('.autosaving-notes__textarea').toHaveValue('My notes'),
            expectElement('.autosaving-notes-header__counter').toHaveText('992')
        );
    });

    it('initially we have 1000 characters', () => {
        const html = app.runHtml('<autosaving-notes></autosaving-notes>');

        html.verify(
            expectElement('.autosaving-notes-header__counter').toHaveText('1000')
        );

    });


});