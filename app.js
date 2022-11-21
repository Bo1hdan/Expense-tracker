const expenseName = document.querySelector("#name");
const expenseDate = document.querySelector("#date");
const expenseAamount = document.querySelector("#amount");
const addExpense = document.querySelector("#addExpense");
const form = document.querySelector("#expenseForm");
const tableBody = document.querySelector("#table-body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newExName = expenseName.value;
  const newExDate = expenseDate.value;
  const newExAmount = expenseAamount.value;

  const row = tableBody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell1.innerHTML = newExName;
  cell2.innerHTML = newExDate;
  cell3.innerHTML = newExAmount;
  expenseName.value = "";
  expenseDate.value = "";
  expenseAamount.value = "";
  // newName.value = newExName;
  // newDate.value = newExDate;
  // newAmount.value = newExAmount;
  // const newRow = document.createElement('tr');
  // const newName = document.createElement('td');
  // newRow.append(newName.value=newExName);
  // const newDate = document.createElement('td');
  // newRow.append(newDate.innerText=newExDate);
  // const newAmount = document.createElement('td');
  // newRow.append(newAmount.innerHTML=newExAmount);
});
