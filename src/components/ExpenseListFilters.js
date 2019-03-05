import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTestFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters';

class ExpenseListFilters extends React.Component
{
    state = {
        calenderFocused: null
    }

    onDatesChange = ({startDate, endDate}) =>
    {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render(){
    return(
<div>
        <input value={this.props.filters.text} type="text"  onChange= {(e) => {this.props.dispatch(setTestFilter(e.target.value))}}/>
        <select value={this.props.filters.sortBy} onChange={(e) => {
            if(e.target.value === 'date')
            {
                this.props.dispatch(sortByDate());
            }
            else if (e.target.value === 'amount'){
                this.props.dispatch(sortByAmount());
            }
        }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
        startDate={this.props.filters.startDate} 
        endDate={this.props.filters.endDate}
        focusedInput={this.state.calenderFocused}
        onDatesChange={this.onDatesChange}
        onFocusChange={calenderFocused => this.setState({ calenderFocused })}
        showClearDates = {true}
        numberOfMonths = {1}
        isOutsideRange = {() => false}
        />
    </div>
    )
}
}


const mapStateToProps = (state) => {
    return{
        filters: state.filters
    };
    };

export default connect(mapStateToProps)(ExpenseListFilters);