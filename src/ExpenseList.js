import React from 'react';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      case 'INR':
        return '₹';
      default:
        return '';
    }
  };

  return (
    <div className="expense-list">
      <div className="expense-list-header">Expense List</div>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-list-item">
          <div className="title">
            <span>{expense.title}</span>
            <span className="currency">{getCurrencySymbol(expense.currency)}</span>
          </div>
          <div className="amount">
            {getCurrencySymbol(expense.currency)} {expense.amount.toFixed(2)}
          </div>
          <div className="delete-button" onClick={() => deleteExpense(expense.id)}>
            <MdDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
