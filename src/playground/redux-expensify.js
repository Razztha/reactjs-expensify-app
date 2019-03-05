import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import {addExpense, removeExpense, editExpense} from '../actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

const expensesReducerDefaultState = []

// expense reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type)
    {
        case 'ADD_EXPENSE': return [...state, action.expense];
        case 'REMOVE_EXPENSE': return state.filter(({id}) => {
            return id !== action.id;
        });
        case 'EDIT_EXPENSE': return state.map((expense) => {
            if(expense.id === action.id)
            {
                return {
                    ...expense,
                    ...action.updates
                }
            }
            else
            {
                return expense;
            }
        });
        default: return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type)
    { 
        case 'SET_TEXT_FILTER': return {
            ...state,
            text: action.text
        };

        case 'SORT_BY_DATE': return {
            ...state,
            sortBy: 'date'
        };

        case 'SORT_BY_AMOUNT': return {
            ...state,
            sortBy: 'amount'
        };

        case 'SET_START_DATE': return {
            ...state,
            startDate: action.startDate
        };

        case 'SET_END_DATE': return {
            ...state,
            endDate: action.endDate
        };
        default: return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount')
        {
            return a.amount < b.amount ? 1: -1;
        }
    });
}

// store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})
);

store.subscribe(() => {
    const state = store.getState();
    const visbileExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visbileExpenses)
});

const expenseone = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: 7}));

const expensetwo = store.dispatch(addExpense({description: 'coffe', amount: 200, createdAt: -1}));

// store.dispatch(removeExpense({id: expenseone.expense.id}));

// store.dispatch(editExpense(expensetwo.expense.id, {amount : 500}));

// store.dispatch(setTextFilter('co'));

store.dispatch(sortByDate());

// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(5));

// store.dispatch(setEndDate(10));


const demoState = {
    expenses: [{
        id: 'hdkasgfjdj',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
