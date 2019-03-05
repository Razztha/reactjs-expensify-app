import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import { String } from 'core-js';

// test case for remove expense
test('remove expense', () =>
{
    var action = removeExpense({id: '31231'});

    expect(action).toEqual((
    {
        type: 'REMOVE_EXPENSE',
        id: '31231'
    }))
});

// test case for edit expense
test('edit expense', () => {
    const action = editExpense('testid', {note: 'testnote'});

    expect(action).toEqual(({
        type: 'EDIT_EXPENSE',
        id: 'testid',
        updates: {note: 'testnote'}
    }))
});

// test case for add expense with data
test('add expense with data', () => {

 const expenseData = {
    description: 'test1',
    amount : 102800,
    createdAt: 1000,
    note: 'tt'
 }; 

 const action = addExpense(expenseData);

 console.log(action);

 expect(action).toEqual({
     type: 'ADD_EXPENSE',
     expense: {
         ...expenseData,
         id: expect.any(String)
     }
 });
});

// test case for add expense without data
test('add expense without data', () => {
   
    const action = addExpense();
   
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description : '',
            note : '',
            amount : 0,
            createdAt : 0 
        }
    });
   });