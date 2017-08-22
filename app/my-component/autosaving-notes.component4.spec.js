// describe('my component', () => {
//     let app;
//
//     angular.module('e2e-test.myModule', ['myModule'])
//         .run(function () {
//         });
//
//     beforeEach(() => {
//         app = testRunner.app(['e2e-test.myModule']);
//     });
//
//     afterEach(() => {
//         server.stop();
//     });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//     // angular
//     //     .module('myModule', [])
//     //     .service('notesService', function ($http) {
//     //         const self = this;
//     //         self.save = notes => $http.put('/my/endpoint', {notes});
//     //     })
//     //     .component('myComponent', {
//     //         template: `
//     //             <div class="autosaving-notes">
//     //                 <div class="autosaving-notes__header autosaving-notes-header">
//     //                     <div class="autosaving-notes-header__label">Notes</div>
//     //                     <div class="autosaving-notes-header__indicator" ng-bind="ctrl.indicator"></div>
//     //                     <div class="autosaving-notes-header__counter-label">Letters:</div>
//     //                     <div class="autosaving-notes-header__counter" ng-bind="ctrl.counter()"></div>
//     //                 </div>
//     //                 <textarea class="autosaving-notes__input" ng-model="ctrl.model" ng-change="ctrl.save()"></textarea>
//     //             </div>`,
//     //         controller: MyComponentController,
//     //         controllerAs: 'ctrl',
//     //         bindings: {
//     //             model: '<'
//     //         }
//     //     });
//     //
//     // function MyComponentController(notesService) {
//     //     const self = this;
//     //     console.log('model: ', self.model);
//     //     self.counter = () => 4000 - self.model.length;
//     //     const debounced = _.debounce(() => saveNotes(), 300);
//     //
//     //     self.save = () => debounced();
//     //     self.indicator = 'Saved';
//     //
//     //     function saveNotes() {
//     //         self.indicator = 'Saving...';
//     //         notesService.save(self.model)
//     //             .then(() => {
//     //                 console.log('then');
//     //                 self.indicator = 'Saved'
//     //             })
//     //             .catch(error => {
//     //                 console.log(error);
//     //                 self.indicator = 'Not saved'
//     //             });
//     //     }
//     // }
//     //
//     //
//     // fit('save model to server', (done) => {
//     //     spyOn(_, 'debounce').and.callFake(fn => {
//     //         console.log('asd');
//     //         return () => fn()
//     //     });
//     //     const html = app.runHtml(myComponent(), {model: ''});
//     //     let savedBody, callCounter = 0;
//     //     server.put('/my/endpoint', req => {
//     //         callCounter = callCounter + 1;
//     //         savedBody = req.body();
//     //         req.sendStatus(200);
//     //     });
//     //
//     //     html.perform(
//     //         type('my notes').in('.autosaving-notes__input')
//     //     );
//     //
//     //     html.verify(
//     //         // wait(310),
//     //         () => expect(savedBody).toEqual({notes: 'my notes'}),
//     //         () => expect(callCounter).toEqual(1),
//     //         // done
//     //     );
//     // });
//     //
//     // it('show not saved indicator', () => {
//     //     server = testRunner.http({respondImmediately: false});
//     //     const html = app.runHtml(myComponent(), {model: ''});
//     //     server.put('/my/endpoint', req => req.sendStatus(500));
//     //
//     //
//     //     html.perform(
//     //         type('m').in('.autosaving-notes__input'),
//     //         server.respond
//     //     );
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__indicator').toHaveText('Not saved')
//     //     );
//     //
//     // });
//     //
//     // it('show saved indicator', () => {
//     //     server = testRunner.http({respondImmediately: false});
//     //     const html = app.runHtml(myComponent(), {model: ''});
//     //     server.put('/my/endpoint', req => req.sendStatus(200));
//     //
//     //
//     //     html.perform(
//     //         type('m').in('.autosaving-notes__input'),
//     //         server.respond
//     //     );
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__indicator').toHaveText('Saved')
//     //     );
//     //
//     // });
//     //
//     // it('show saving indicator', () => {
//     //     server = testRunner.http({respondImmediately: false});
//     //     const html = app.runHtml(myComponent(), {model: ''});
//     //
//     //     html.perform(
//     //         type('m').in('.autosaving-notes__input')
//     //     );
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__indicator').toHaveText('Saving...')
//     //     );
//     //
//     // });
//     //
//     // it('reduce counter when typing', () => {
//     //     const html = app.runHtml(myComponent(), {model: 'wojtek'});
//     //
//     //     html.perform(
//     //         type('notes').in('.autosaving-notes__input')
//     //     );
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__counter').toHaveText('3989'),
//     //         expectElement('.autosaving-notes__input').toHaveValue('wojteknotes'),
//     //     );
//     // });
//     //
//     // it('reduce counter with initial string', () => {
//     //     const html = app.runHtml(myComponent(), {model: 'wojtek'});
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__counter').toHaveText('3994')
//     //     );
//     // });
//     //
//     // it('initial value', () => {
//     //     const html = app.runHtml(myComponent(), {model: "wojtek"});
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes__input').toHaveValue('wojtek')
//     //     );
//     // });
//     //
//     // it('initialy 4000 letters', () => {
//     //     const html = app.runHtml(myComponent(), {model: ''});
//     //
//     //     html.verify(
//     //         expectElement('.autosaving-notes-header__counter').toHaveText('4000')
//     //     );
//     // });
//
//     // angular
//     //     .module('myModule')
//     //     .directive('uiCopyLinkDialog', function () {
//     //         return {
//     //             restrict: 'A',
//     //             link: function (scope, element, attrs) {
//     //                 var $elm = angular.element(element);
//     //                 element.bind('click', function (event) {
//     //                     $elm.addClass('test');
//     //                 });
//     //             }
//     //         };
//     //     });
//     //
//     // it("should add class when clicked", function () {
//     //
//     //     const html = app.runHtml('<span class="foo" ui-copy-link-dialog="url"></span>');
//     //
//     //
//     //     html.perform(
//     //         click.in('.foo')
//     //     );
//     //
//     //     html.verify(
//     //         expectElement('.foo').toHaveClass('test')
//     //     );
//     // });
//     //
//     // function myComponent() {
//     //     return `
//     // <my-component
//     //     model="model">
//     // </my-component>
//     // `;
//     // }
// })
// ;