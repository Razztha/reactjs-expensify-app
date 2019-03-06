// import './util.js'
// import substract, {square, add} from './util.js';

// console.log("app.js is running");

// console.log(square(2));

// console.log(add(2, 3));

// console.log(substract(100,45));

// import isSenior, {isAdult, canDrink} from './person.js'

// console.log("Adult: " + isAdult(18));
// console.log("Can drink: " + canDrink(21));
// console.log("Is senior citizen: " + isSenior(65));

// import validator from 'validator';

// console.log(validator.isEmail("test@gmm"));
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import '../node_modules/normalize.css/normalize.css';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTestFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore;

// store.dispatch(addExpense({description: 'Water bill', amount: 5000, createdAt: 0}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 2500, createdAt: 1}));
// store.dispatch(setTestFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

ReactDOM.render(<Provider store={store}>{AppRouter}</Provider>, document.getElementById("app"));