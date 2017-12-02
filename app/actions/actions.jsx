export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var addTodo = () => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};