const expenseType = document.querySelector("#type");
const expenseName = document.querySelector("#name");
const expenseDate = document.querySelector("#date");
const expenseAamount = document.querySelector("#amount");
const addExpense = document.querySelector("#addExpense");
const form = document.querySelector("#expenseForm");
const tableHead= document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
const tableFooter =document.querySelector("#table-footer");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newExName = expenseName.value;
  const newExDate = expenseDate.value;
  const newExAmount = expenseAamount.value;
  const newType = expenseType.value;

  const row = tableBody.insertRow();
  const cell0 = row.insertCell();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell0.innerHTML = newType;
  cell1.innerHTML = newExName;
  cell2.innerHTML = newExDate;
  cell3.innerHTML = newExAmount;
  expenseType.value = "";
  expenseName.value = "";
  expenseDate.value = "";
  expenseAamount.value = "";
 
});