// Getting form element and table body.
const form = document.getElementById('studentForm');
const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

// Initialize.
let editMode = false;
let editRow = null;
let editedCells = [];

// Load data from local storage.
loadStudents();

// Add event listener to the form to handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) { // Validate the form inputs
        if (editMode) {
            updateStudent(); // Update the student 
        } else {
            addStudent(); // Add a new student 
        }
        form.reset(); // Reset the form inputs
        saveStudents(); // Save the updated data to local storage
    }
});

// Function to validate the form inputs
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const id = document.getElementById('id').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();

    // Validate checks
    if (name === '' || /[^a-zA-Z\s]/.test(name)) {
        alert('Student Name Field cannot consist of numbers or special characters');
        return false;
    }    
    if (id === '' || isNaN(id)) {
        alert('Student ID must be a number');
        return false;
    }
    if (email === '' || !email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    if (contact === '' || isNaN(contact) || contact.length !== 10) {
        alert('Contact No. must be a 10-digit number');
        return false;
    }
    return true; // All validations passed
}

// Function to add a new student to the table
function addStudent() {
    const row = table.insertRow(); // Insert a new row 
    const cells = []; // Array to hold the cells of the row
    for (let i = 0; i < 6; i++) {
        cells.push(row.insertCell(i)); // Create 6 cells in the row
    }

    cells[0].textContent = document.getElementById('name').value;
    cells[1].textContent = document.getElementById('id').value;
    cells[2].textContent = document.getElementById('email').value;
    cells[3].textContent = document.getElementById('contact').value;
    
    // Create and append the Edit button to the row
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() { editStudent(this); };
    cells[4].appendChild(editBtn);

    // Create and append the Delete button to the row
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() { deleteStudent(this); };
    cells[5].appendChild(deleteBtn);
}

// Function to edit an existing student
function editStudent(btn) {
    editMode = true; // Enable edit mode
    editRow = btn.parentNode.parentNode; // Get the row being edited

    document.getElementById('name').value = editRow.cells[0].textContent;
    document.getElementById('id').value = editRow.cells[1].textContent;
    document.getElementById('email').value = editRow.cells[2].textContent;
    document.getElementById('contact').value = editRow.cells[3].textContent;
    editRow.classList.add('edit-mode'); // Add a class to indicate edit mode
    editedCells = []; // Reset the list of edited cells
}

// Function to update an existing student's information
function updateStudent() {
    const newValues = [
        document.getElementById('name').value,
        document.getElementById('id').value,
        document.getElementById('email').value,
        document.getElementById('contact').value
    ];
    
    // Update the cell values
    for (let i = 0; i < 4; i++) {
        if (editRow.cells[i].textContent !== newValues[i]) {
            editRow.cells[i].textContent = newValues[i];
            editRow.cells[i].classList.add('edited'); // Mark the cell as edited
            editedCells.push(i); // Add the cell to the edited cells list
        }
    }
    
    editRow.classList.remove('edit-mode'); // Remove the edit mode class
    editMode = false; // Disable edit mode
    editRow = null; // Reset the edited row
}

// Function to delete a student record
function deleteStudent(btn) {
    if (confirm('Are you sure you want to delete this record?')) { // Confirm deletion
        const row = btn.parentNode.parentNode; // Get the row to be deleted
        row.parentNode.removeChild(row); // Remove the row 
        saveStudents(); // Save the updated data to local storage
    }
}

// Function to save student data to local storage
function saveStudents() {
    const students = []; // Array to hold student data
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const student = {
            name: row.cells[0].textContent,
            id: row.cells[1].textContent,
            email: row.cells[2].textContent,
            contact: row.cells[3].textContent,
            edited: Array.from(row.cells).slice(0, 4).map(cell => cell.classList.contains('edited'))
        };
        students.push(student); // Add the student to the array
    }
    localStorage.setItem('students', JSON.stringify(students)); // Save the data to local storage
}

// Function to load student data from local storage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || []; // Get stored data
    students.forEach(student => {
        const row = table.insertRow(); // Insert a new row for each student
        const cells = [];
        for (let i = 0; i < 6; i++) {
            cells.push(row.insertCell(i)); // Create cells in the row
        }
        cells[0].textContent = student.name;
        cells[1].textContent = student.id;
        cells[2].textContent = student.email;
        cells[3].textContent = student.contact;
        
        // Add the 'edited' class to cells 
        for (let i = 0; i < 4; i++) {
            if (student.edited[i]) {
                cells[i].classList.add('edited');
            }
        }

        // Create and append the Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function() { editStudent(this); };
        cells[4].appendChild(editBtn);

        // Create and append the Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() { deleteStudent(this); };
        cells[5].appendChild(deleteBtn);
    });
}

window.onload = function() {
  // Function to Add dynamically scrollbar to the student table
  function addScrollbarToTable() {
      // Get the table container
      var tableContainer = document.querySelector('#studentTable').parentNode;

      // maximum height and vertical scrolling
      tableContainer.style.maxHeight = '200px'; 
      tableContainer.style.overflowY = 'auto'; 
      tableContainer.style.border = '1px solid #ccc'; 
  }

  // Call the function 
  addScrollbarToTable();
};
