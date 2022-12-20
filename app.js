const expenseType = document.querySelector("#type");
const expenseName = document.querySelector("#name");
const expenseDate = document.querySelector("#date");
const expenseAamount = document.querySelector("#amount");
const addExpense = document.querySelector("#addExpense");
const form = document.querySelector("#expenseForm");
const tableHead = document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
const tableFooter = document.querySelector("#table-footer");

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

function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var txtValue = "";
  tr = tableBody.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function myFunction1() {
  var input = document.getElementById("myInput1");
  var filter = input.value.toUpperCase();
  var txtValue = "";
  tr = tableBody.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function myFunction2() {
  var input = document.getElementById("myInput2");
  var filter = input.value.toUpperCase();
  var txtValue = "";
  tr = tableBody.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function myFunction3() {
  var input = document.getElementById("myInput3");
  var filter = input.value.toUpperCase();
  var txtValue = "";
  tr = tableBody.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTable() {
  var rows, switching, i, x, y, shouldSwitch;

  switching = true;

  while (switching) {
    switching = false;
    rows = tableBody.getElementsByTagName("TR");

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTable1() {
  var rows, switching, i, x, y, shouldSwitch;

  switching = true;

  while (switching) {
    switching = false;
    rows = tableBody.getElementsByTagName("TR");

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortTable2() {
  var rows, switching, i, x, y, shouldSwitch;

  switching = true;

  while (switching) {
    switching = false;
    rows = tableBody.getElementsByTagName("TR");

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortTable3() {
  var rows, switching, i, x, y, shouldSwitch;

  switching = true;

  while (switching) {
    switching = false;
    rows = tableBody.getElementsByTagName("TR");

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
