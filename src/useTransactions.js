import { useContext } from 'react';

import { ExpenseTrackerContest } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  console.log("Tittt - > ", title);
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContest);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  console.log("Cat -> ", categories);
  console.log("tit -> ", title);
  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });
   
  const filteredCategories = categories.filter((sc) => sc.amount > 0);
    console.log("filter => ", filteredCategories);
    console.log("rightTra => ", rightTransactions);
    console.log("cater => ", categories);
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
