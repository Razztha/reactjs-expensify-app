import React from 'react';
import {connect} from 'react-redux';
import getTotalExpenses from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = ({totalExpenseAmount, expenseCount}) =>
{
    const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
    const totalExpenseFormattedCount = numeral(totalExpenseAmount).format('$0,0.00');

    return (
    <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {totalExpenseFormattedCount}</h1>
    </div>
    );
};

const mapStateToProps = (state) =>
{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        totalExpenseAmount: getTotalExpenses(visibleExpenses)
    }
    
}

export default connect(mapStateToProps)(ExpenseSummary);