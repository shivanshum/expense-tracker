import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate the total amount whenever expenses change
    const calculateTotalAmount = () => {
      const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="box">
      <div className="container">
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <div className="total-amount">
          <span>Total Amount:</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );  
};

export default App;
