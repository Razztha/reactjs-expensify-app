import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMMM Do YYYY'));

class ExpenseForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }

   onDescriptionChange = (e) =>
   {
        e.persist();
       this.setState(() => ({
           description : e.target.value
       }));
   }

   onNoteChange = (e) =>
   {
       const note = e.target.value;
       this.setState(() => ({
           note
       }));
   }

   onAmountChange = (e) =>
   {
       const amount = e.target.value;

       if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
       {
        this.setState(() => ({
            amount
        }));
       }  
   }

   onChangeDate = (createdAt) => 
   {
       if(createdAt)
       {
        this.setState(() => ({
            createdAt: createdAt
        }))
        }
   }

   onFocusChange = ({focused}) => {
        this.setState(() => (
            {
                calenderFocused : focused
            }
        ))
   }

   onSubmit = (e) =>{
        e.preventDefault();

        if (!this.state.description || !this.state.amount)
        {
            console.log("error");
            this.setState(() => ({
                error: 'description and amount required'
            }))
        }

        else{
        this.setState(() => ({
            error: ''
        }))

        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            note: this.state.note,
            createdAt: this.state.createdAt.valueOf()
        })

        }
   }

    render()
    {
        return(
            <div>
                <h3>Expense form</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="number" placeholder="amount" autoFocus value={this.state.amount} onChange={this.onAmountChange}/>
                    <textarea type="text" placeholder="note (optional)" autoFocus value={this.state.note} onChange={this.onNoteChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onChangeDate} // PropTypes.func.isRequired
                        focused={this.state.calenderFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                        id="createdAt" // PropTypes.string.isRequired,
                        />
                        <br />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;