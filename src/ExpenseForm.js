import React, { useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && amount.trim() !== '') {
      const newExpense = {
        id: Date.now().toString(),
        title,
        amount: parseFloat(amount),
        currency,
      };
      addExpense(newExpense);
      setTitle('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <div className="icon">
          <MdAttachMoney />
        </div>
        <input
          type="number"
          step="0.01"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2 rounded"
        >
          {/* <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option> */}
          <option value="INR">INR</option>
        </select>
      </div>
      <button type="submit" className="button">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
