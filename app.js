function checkLeapYear() {
  const year = parseInt(document.getElementById("leap-year").value);
  if (!year) {
    document.getElementById("leap-year-result").innerHTML = "Enter a year";
    return;
  }
  if (year <= 0) {
    document.getElementById("leap-year-result").innerHTML = "Invalid year";
    return;
  }
  document.getElementById("leap-year-result").innerHTML = "";
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        document.getElementById("leap-year-result").innerHTML =
          year + " is a leap year. ✅";
      } else {
        document.getElementById("leap-year-result").innerHTML =
          year + " is not a leap year. ❌";
      }
    } else {
      document.getElementById("leap-year-result").innerHTML =
        year + " is a leap year. ✅";
    }
  } else {
    document.getElementById("leap-year-result").innerHTML =
      year + " is not a leap year. ❌";
  }
}

function findSunday() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let year = 2014; year <= 2050; year++) {
    const tableRow = document.createElement("tr");
    const columnYear = document.createElement("td");
    const columnSunday = document.createElement("td");
    columnYear.textContent = year;
    let date = new Date(year, 0, 1); // 0 is for January and 1 is for the first day
    if (date.getDay() === 0) {
      // 0 is represent sunday in getDay
      columnSunday.textContent = `✅`;
    } else {
      columnSunday.textContent = `❌`;
    }
    tableRow.appendChild(columnYear);
    tableRow.appendChild(columnSunday);
    tableBody.appendChild(tableRow);
  }
}

function iterates() {
  const tableBody = document.getElementById("table-body-iterates");
  tableBody.innerHTML = "";

  for (let i = 0; i <= 15; i++) {
    const tableRow = document.createElement("tr");
    const columnNumber = document.createElement("td");
    const columnOdd = document.createElement("td");
    const columnEven = document.createElement("td");
    columnNumber.textContent = i;
    if (i % 2 == 0) {
      columnEven.textContent = `✅`;
    } else {
      columnOdd.textContent = `✅`;
    }
    tableRow.appendChild(columnNumber);
    tableRow.appendChild(columnOdd);
    tableRow.appendChild(columnEven);
    tableBody.appendChild(tableRow);
  }
}
function palindrome() {
  const value = document.getElementById("text-palindrome").value;
  if (value.length <= 0) {
    console.log("empty");
    document.getElementById("palindrome-result").innerHTML =
      "Pls Enter String ";
    return;
  }
  const reverseStr = value.split("").reverse().join("");
  if (value.toLowerCase() === reverseStr.toLowerCase()) {
    document.getElementById("palindrome-result").innerHTML =
      value + " is palindrome ✅";
  } else {
    document.getElementById("palindrome-result").innerHTML =
      value + " is not palindrome ❌";
  }
}
