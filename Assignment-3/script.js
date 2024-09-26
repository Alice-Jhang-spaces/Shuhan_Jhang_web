window.onload = function() {
  alert("Full Name: Shu-Han Jhang\nNUID: 002332773");
  document.getElementById("button").disabled = true;
  document.getElementById("button").style.backgroundColor = "gray";
};

// Global variable to track the current student number
var currentStudentNumber = 2; 

document.getElementById("add").onclick = function() {
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  
  // Add the student row
  var newRow = table.insertRow();
  newRow.innerHTML = `
      <td><input type="checkbox" onclick="selectRecord(this)" /><br /><br /><img src="down.png" width="25px" onclick="toggleRow(this)" /></td>
      <td>Student ${currentStudentNumber}</td>
      <td>Teacher ${currentStudentNumber}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>1234${currentStudentNumber}</td>
      <td>100%</td>
  `;

  // Add the dropdown row (hidden by default)
  var newDropdownRow = table.insertRow();
  newDropdownRow.className = 'dropDownTextArea';
  newDropdownRow.style.display = 'none';
  newDropdownRow.innerHTML = `
      <td colspan="10" style="text-align: left;">
          Advisor:<br /><br />
          Award Details<br />
          Summer 1-2014(TA)<br />
          Budget Number: <br />
          Tuition Number: <br />
          Comments:<br /><br /><br />
          Award Status:<br /><br /><br />
      </td>
  `;

  alert(`Student ${currentStudentNumber} Record added successfully`);

  // Increment the global student number for the next addition
  currentStudentNumber++;
};

// Function to delete a row
function onDeleteRow(deleteButton) {
  var selectedRow = deleteButton.parentElement.parentElement;
  var studentName = selectedRow.cells[1].innerText;
  var dropdownRow = selectedRow.nextElementSibling;  // Select the dropdown row

  // Remove the student row and the associated dropdown row
  selectedRow.remove();
  dropdownRow.remove();

  alert(studentName + " Record deleted successfully");
}

// Function to handle row selection and dynamically add delete/edit buttons
function selectRecord(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;

  if (checkBox.checked) {
      // Change background color when selected
      selectedRow.style.backgroundColor = "yellow";
      
      // Enable the submit button
      document.getElementById("button").disabled = false;
      document.getElementById("button").style.backgroundColor = "orange";

      // Add delete and edit buttons if not already present
      if (selectedRow.cells.length === 8) {
          var deleteId = document.createElement("td");
          deleteId.innerHTML = '<button type="button" onclick="onDeleteRow(this)">Delete</button>';
          selectedRow.appendChild(deleteId);
          
          var editId = document.createElement("td");
          editId.innerHTML = '<button type="button" onclick="onEditRow(this)">Edit</button>';
          selectedRow.appendChild(editId);
      }
  } else {
      // Change background color back to default
      selectedRow.style.backgroundColor = "white";
      // Disable the submit button if no rows are selected
      if (noneSelected()) {
          document.getElementById("button").disabled = true;
          document.getElementById("button").style.backgroundColor = "gray";
      }

      // Remove the delete and edit buttons
      if (selectedRow.cells.length > 8) {
          selectedRow.deleteCell(-1); // Remove Edit button
          selectedRow.deleteCell(-1); // Remove Delete button
      }
  }
}

//Function to check if no rows are selected
function noneSelected() {
  var checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');
  return !Array.from(checkboxes).some(checkbox => checkbox.checked);

}

// Function to delete a row
function onDeleteRow(deleteButton) {
  var selectedRow = deleteButton.parentElement.parentElement;
  var studentName = selectedRow.cells[1].innerText;
  var dropdownRow = selectedRow.nextElementSibling;  // Select the dropdown row

  // Remove the student row and the associated dropdown row
  selectedRow.remove();
  dropdownRow.remove();

  alert(studentName + " Record deleted successfully");
  document.getElementById("button").style.backgroundColor = "gray";

}

// // Function to handle editing a row
// function onEditRow(editButton) {
//   var selectedRow = editButton.parentElement.parentElement;
//   var studentName = selectedRow.cells[1].innerText;

//   // Show a pop-up with student details
//   var editPopup = `
//       <div>
//           <h2>Edit details of ${studentName}</h2>
//           <p>Student: ${studentName}</p>
//           <p>Advisor: ${selectedRow.cells[2].innerText}</p>
//           <p>Award Status: ${selectedRow.cells[3].innerText}</p>
//           <p>Semester: ${selectedRow.cells[4].innerText}</p>
//           <p>Type: ${selectedRow.cells[5].innerText}</p>
//           <p>Budget #: ${selectedRow.cells[6].innerText}</p>
//           <p>Percentage: ${selectedRow.cells[7].innerText}</p>
//           <button onclick="confirmEdit('${studentName}')">Update</button>
//           <button onclick="closePopup()">Cancel</button>
//       </div>
//   `;
//   document.getElementById('popup').innerHTML = editPopup;
//   document.getElementById('popup').style.display = 'block';
// }

// // Function to confirm edit and close the pop-up
// function confirmEdit(studentName) {
//   alert(`Student ${studentName} data updated successfully`);
//   closePopup();
// }

// // Function to close the pop-up
// function closePopup() {
//   document.getElementById('popup').style.display = 'none';
// }

// Function to handle editing a row
function onEditRow(editButton) {
  var selectedRow = editButton.parentElement.parentElement;

  // Extract the current values from the selected row
  var studentName = selectedRow.cells[1].innerText;
  var advisor = selectedRow.cells[2].innerText;
  var awardStatus = selectedRow.cells[3].innerText;
  var semester = selectedRow.cells[4].innerText;
  var type = selectedRow.cells[5].innerText;
  var budgetNumber = selectedRow.cells[6].innerText;
  var percentage = selectedRow.cells[7].innerText;

  // Show a pop-up with editable fields for student details
  var editPopup = `
      <div>
          <h2>Edit details of ${studentName}</h2>
          <label>Student:</label>
          <input type="text" id="editStudentName" value="${studentName}" /><br/>
          <label>Advisor:</label>
          <input type="text" id="editAdvisor" value="${advisor}" /><br/>
          <label>Award Status:</label>
          <input type="text" id="editAwardStatus" value="${awardStatus}" /><br/>
          <label>Semester:</label>
          <input type="text" id="editSemester" value="${semester}" /><br/>
          <label>Type:</label>
          <input type="text" id="editType" value="${type}" /><br/>
          <label>Budget #:</label>
          <input type="text" id="editBudgetNumber" value="${budgetNumber}" /><br/>
          <label>Percentage:</label>
          <input type="text" id="editPercentage" value="${percentage}" /><br/>
          <button onclick="confirmEdit(${selectedRow.rowIndex})">Update</button>
          <button onclick="closePopup()">Cancel</button>
      </div>
  `;
  document.getElementById('popup').innerHTML = editPopup;
  document.getElementById('popup').style.display = 'block';
}

// Function to confirm edit and update the table row
function confirmEdit(rowIndex) {
  // Get the updated values from the input fields
  var updatedStudentName = document.getElementById("editStudentName").value;
  var updatedAdvisor = document.getElementById("editAdvisor").value;
  var updatedAwardStatus = document.getElementById("editAwardStatus").value;
  var updatedSemester = document.getElementById("editSemester").value;
  var updatedType = document.getElementById("editType").value;
  var updatedBudgetNumber = document.getElementById("editBudgetNumber").value;
  var updatedPercentage = document.getElementById("editPercentage").value;

  // Update the selected row in the table
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  var selectedRow = table.rows[rowIndex - 1]; // rowIndex - 1 to handle 0-based indexing

  selectedRow.cells[1].innerText = updatedStudentName;
  selectedRow.cells[2].innerText = updatedAdvisor;
  selectedRow.cells[3].innerText = updatedAwardStatus;
  selectedRow.cells[4].innerText = updatedSemester;
  selectedRow.cells[5].innerText = updatedType;
  selectedRow.cells[6].innerText = updatedBudgetNumber;
  selectedRow.cells[7].innerText = updatedPercentage;

  // Display a success message
  alert(`Student ${updatedStudentName} data updated successfully`);

  // Close the pop-up
  closePopup();
}

// Function to close the pop-up
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}



// Function to toggle row expansion/collapse
function toggleRow(img) {
  var row = img.parentElement.parentElement.nextElementSibling;
  row.style.display = (row.style.display === 'none' || row.style.display === '') ? 'table-row' : 'none';
}

// Adding  the submit button to show a pop-up message
document.getElementById("button").onclick = function () {
  // Check if the button is disabled
  if (this.disabled) {
    // Enable the submit button
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
    
  }

  // Otherwise, show a pop-up message indicating that the selected awards were submitted
  var selectedStudents = [];
  var checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');

  // Gather all selected student names
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      var selectedRow = checkbox.parentElement.parentElement;
      var studentName = selectedRow.cells[1].innerText;
      selectedStudents.push(studentName);
    }
  });

  // Show the pop-up message with the names of the selected students
  if (selectedStudents.length > 0) {
    alert('Awards for ' + selectedStudents.join(', ') + ' submitted successfully!');
  } else {
    // Enable the submit button
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
  }
};


