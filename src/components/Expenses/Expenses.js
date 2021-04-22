import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onChangeYearHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };
  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filterdExpenses.length > 0) {
    expensesContent =
      filterdExpenses.length > 0 &&
      filterdExpenses.map((filteredItem) => (
        <ExpenseItem
          key={filteredItem.id}
          title={filteredItem.title}
          amount={filteredItem.amount}
          date={filteredItem.date}
        />
      ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          changeYear={onChangeYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
