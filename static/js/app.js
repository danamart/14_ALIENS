var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#date");
var searchButton = document.querySelector("#search");
var resetButton = document.querySelector("#reset");




searchButton.addEventListener("click", handleSearchButtonClick);
resetButton.addEventListener("click", handleResetButtonClick);

var filterData = data;

function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filterData.length; i++) {
  var sight = filterData[i];
  var fields = Object.keys(sight);
  var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
    var field = fields[j];
    var cell = row.insertCell(j);
    cell.innerText = sight[field];
    }
  }
}

function handleSearchButtonClick() {



  var filterDate = dateInput.value.trim();
  if (filterDate != "") {
    filterData = data.filter(function (sight) {
    var sightDate = sight.datetime;
    return sightDate === filterDate;
    });
  };
  renderTable();
};

function handleResetButtonClick() {
            filterData = data;
  dateInput.value = "";
  renderTable();
}
renderTable();