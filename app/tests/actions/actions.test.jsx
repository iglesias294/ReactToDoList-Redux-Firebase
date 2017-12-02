var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'SOME_SEARCH_TEXT'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });
});