import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type: 'INCREMENT',
        incrementBy: incrementBy
    });

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count = 10} = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0 
});

const countReducer = (state = {count : 0}, action) => {

    switch(action.type)
    {
        case 'RESET': return {count : 0}; break;
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
        return {
            count:state.count + incrementBy
        }; break;
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
        return {
            count:state.count - decrementBy
        }; break;
        case 'SET':
        const count = typeof action.count === 'number' ? action.count : 0; 
        return {
            count : count
        }; break;
        default: return state; break;
    }
}

const store = createStore(countReducer);

// Print all state changes
store.subscribe(() => {
    console.log(store.getState())
});

// increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// Decrement store
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
});

// store.dispatch({
//     type: 'SET',
//     count: 10
// });

store.dispatch(setCount({count : 20}));

store.dispatch(incrementCount({incrementBy: 4}));

store.dispatch(decrementCount({decrementBy: 2}));

// Reset store
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());
