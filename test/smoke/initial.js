const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-1.001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

        it('TC-1.002 Header is present', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-1.003 Header is correct', function () {
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-1.004 Description text is present', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-1.005 Description text = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const description = $(sel.description).getText();
            expect(description).toEqual(exp.description);
        });

    });

    describe('Name Section', function () {

        it('TC-2.001 label 1 is present', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
    });

        it('TC-2.002 label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-2.003 Name field is present', function () {
            const nameField = $(sel.nameField).isDisplayed();
            expect(nameField).toEqual(true);
        });

        it('TC-2.004 Placeholder text = Hero\'s name', function () {
            const text = $(sel.namePlaceholder).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholder);
        });

        it('TC-2.005 Input field accepts lower case letters', function () {
            const input = $(sel.namePlaceholder);
            input.addValue('shrek');
            expect(input.getValue()).toEqual(exp.nameInputValue);
        });
    });


});
