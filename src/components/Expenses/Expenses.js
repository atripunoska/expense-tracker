import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          changeYear={onChangeYearHandler}
        />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
