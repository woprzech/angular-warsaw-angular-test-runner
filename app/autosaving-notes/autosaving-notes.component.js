angular.module('autosavingNotes', [])
    .component('autosavingNotes', {
        template: `
                            <div class="autosaving-notes">
                                <div class="autosaving-notes-header">
                                    <div class="autosaving-notes-header__label">Notes</div>
                                    <div class="autosaving-notes-header__indicator" ng-bind="ctrl.indicator"></div>
                                    <div class="autosaving-notes-header__counter" ng-bind="ctrl.counter()"></div>
                                    <div class="autosaving-notes-header__counter-label">characters left</div>
                                </div>
                                <textarea class="autosaving-notes__textarea" ng-model="ctrl.model" ng-change="ctrl.save()"></textarea>
                            </div>`,
        controller: AutosavingNotesController,
        controllerAs: 'ctrl'
    });

function AutosavingNotesController($http) {
    const self = this;
    self.model = '';
    self.counter = () => 1000 - self.model.length;
    self.indicator = 'Saved.';
    self.save = () => {
        self.indicator = 'Saving...';
        $http.put('/my/endpoint', {notes: self.model})
            .then(() => self.indicator = 'Saved.')
            .catch(() => self.indicator = 'Not saved.');

    };

}