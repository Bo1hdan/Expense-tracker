const expenseType = document.querySelector("#type");
const expenseName = document.querySelector("#name");
const expenseDate = document.querySelector("#date");
const expenseAamount = document.querySelector("#amount");
const typeFilter = document.querySelector("#type-filter");
const nameFilter = document.querySelector("#name-filter");
const dateFilter = document.querySelector("#date-filter");
const amountFilter = document.querySelector("#amount-filter");
const addExpense = document.querySelector("#addExpense");
const form = document.querySelector("#expenseForm");
const tableHead = document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
const tableFooter = document.querySelector("#table-footer");
const filter = document.querySelector("#filter-form");
const filterData = [];
const arrayData = [
  {
    type: "Groceries",
    name: "Apples",
    date: 2022 - 12 - 28,
    amount: 3,
  },
  {
    type: "Entertainment",
    name: "Movie",
    date: 10 - 13 - 2022,
    amount: 24,
  },
  {
    type: "Clothes",
    name: "Pants",
    date: 06 - 08 - 2022,
    amount: 11,
  },
  {
    type: "Health",
    name: "Cream",
    date: 05 - 02 - 2022,
    amount: 69,
  },
];

const filterByType = arrayData.filter((fType) => fType.type);

const onlyType = filterByType.map(fType => fType.type);


filter.addEventListener("submit", (e) => {
  e.preventDefault();

  const row = tableBody.insertRow();
  const cell0 = row.insertCell();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();

  cell0.innerHTML = typeFilter.value;
  cell1.innerHTML = nameFilter.value;
  cell2.innerHTML = dateFilter.value;
  cell3.innerHTML = amountFilter.value;

  typeFilter.value = "";
  nameFilter.value = "";
  dateFilter.value = "";
  amountFilter.value = "";

  // filterData.push({
  //   type: `${typeFilter.value}`,
  //   name: `${nameFilter.value}`,
  //   date: `${dateFilter.value}`,
  //   amount: `${amountFilter.value}`,
  // });

  // const row = tableBody.insertRow();
  // const cell0 = row.insertCell();
  // const cell1 = row.insertCell();
  // const cell2 = row.insertCell();
  // const cell3 = row.insertCell();

  // cell0.innerHTML = filterData[filterData.length - 1].type;
  // cell1.innerHTML = filterData[filterData.length - 1].name;
  // cell2.innerHTML = filterData[filterData.length - 1].date;
  // cell3.innerHTML = filterData[filterData.length - 1].amount;

  // typeFilter.value = "";
  // nameFilter.value = "";
  // dateFilter.value = "";
  // amountFilter.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  arrayData.push({
    type: `${expenseType.value}`,
    name: `${expenseName.value}`,
    date: `${expenseDate.value}`,
    amount: `${expenseAamount.value}`,
  });

  const row = tableBody.insertRow();
  const cell0 = row.insertCell();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();

  cell0.innerHTML = arrayData[arrayData.length - 1].type;
  cell1.innerHTML = arrayData[arrayData.length - 1].name;
  cell2.innerHTML = arrayData[arrayData.length - 1].date;
  cell3.innerHTML = arrayData[arrayData.length - 1].amount;

  expenseType.value = "";
  expenseName.value = "";
  expenseDate.value = "";
  expenseAamount.value = "";
});

// for (let j = 0; j < 4; j++) {
//   function myFunction() {
//     var input = document.getElementById("myInput" + j);
//     var filter = input.value.toUpperCase();
//     var txtValue = "";
//     tr = tableBody.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[j];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }
// }

// function myFunction1() {
//   var input = document.getElementById("myInput1");
//   var filter = input.value.toUpperCase();
//   var txtValue = "";
//   tr = tableBody.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[1];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
// function myFunction2() {
//   var input = document.getElementById("myInput2");
//   var filter = input.value.toUpperCase();
//   var txtValue = "";
//   tr = tableBody.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[2];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
// function myFunction3() {
//   var input = document.getElementById("myInput3");
//   var filter = input.value.toUpperCase();
//   var txtValue = "";
//   tr = tableBody.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[3];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// function sortTable() {
//   var rows, switching, i, x, y, shouldSwitch;

//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = tableBody.getElementsByTagName("TR");

//     for (i = 0; i < rows.length - 1; i++) {
//       shouldSwitch = false;

//       x = rows[i].getElementsByTagName("TD")[0];
//       y = rows[i + 1].getElementsByTagName("TD")[0];

//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

// function sortTable1() {
//   var rows, switching, i, x, y, shouldSwitch;

//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = tableBody.getElementsByTagName("TR");

//     for (i = 0; i < rows.length - 1; i++) {
//       shouldSwitch = false;

//       x = rows[i].getElementsByTagName("TD")[1];
//       y = rows[i + 1].getElementsByTagName("TD")[1];

//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }
// function sortTable2() {
//   var rows, switching, i, x, y, shouldSwitch;

//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = tableBody.getElementsByTagName("TR");

//     for (i = 0; i < rows.length - 1; i++) {
//       shouldSwitch = false;

//       x = rows[i].getElementsByTagName("TD")[2];
//       y = rows[i + 1].getElementsByTagName("TD")[2];

//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }
// function sortTable3() {
//   var rows, switching, i, x, y, shouldSwitch;

//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = tableBody.getElementsByTagName("TR");

//     for (i = 0; i < rows.length - 1; i++) {
//       shouldSwitch = false;

//       x = rows[i].getElementsByTagName("TD")[3];
//       y = rows[i + 1].getElementsByTagName("TD")[3];

//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }



// typeFilter.value = "Clothes";

// arrayData.map(function (arr) {
//   if (arr.type == typeFilter.value) {
//     return arr.type;
//   } else {
//     console.log("ooops");
//   }
// });

// arrayData.filter(arr=>{
//   return arr==="Cream"
// })

//hdfhjdhhjgfhdghfgdjgjdghjgfdhgjhdgfd
  // const filterByName = arrayData.filter(function (fName) {
  //   return fName.name;
  // });
  // const filterByDate = arrayData.filter(function (fDate) {
  //   return fDate.date;
  // });
  // const filterByAmount = arrayData.filter(function (fAmount) {
  //   return fAmount.amount;
  // });

  // if (typeFilter.value == filterByAmount) {
  //   filterData.push({
  //     type: `${amountFilter.value}`,
  //   });
  // } else if (typeFilter.value == filterByDate) {
  //   filterData.push({
  //     type: `${dateFilter.value}`,
  //   });
  // } else if (typeFilter.value == filterByName) {
  //   filterData.push({
  //     type: `${nameFilter.value}`,
  //   });
  // } else if (typeFilter.value == filterByType) {
  //   filterData.push({
  //     type: `${typeFilter.value}`,
  //   });
  // } else if (typeFilter.value == filterByType) {
  //   filterData.push({
  //     type: `${typeFilter.value}`,
  //   });
  // }else{
  //   alert("not found")
  // }