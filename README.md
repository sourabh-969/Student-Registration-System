**Student Registration System**

**Overview**

This is a web-based student registration system built using HTML, CSS, and JavaScript. It allows users to add, edit, and delete student records. The data is stored locally in the browser's local storage, persisting even after page refreshes.

**Key Features:**

* **User-Friendly Interface:** A clear and intuitive interface for easy interaction.
* Screenshot :
* ![1 main](https://github.com/user-attachments/assets/d190281f-6e1b-4fc9-8856-f67a32779927)
* **Data Validation:** Ensures data integrity by validating input fields (name, ID, email, contact number).
*  Screenshot :
*  Validation ERROR :
*  ![ValidationERROR](https://github.com/user-attachments/assets/4c5287eb-4b8d-4e67-884d-3e8f1f27e657)
*  Empty Field ERROR :
*  ![emptyERROR](https://github.com/user-attachments/assets/be2d4b6c-069e-4ddb-bbda-704d3bbc1c7b)
* **Local Storage:** Stores data locally for persistence across sessions.
*  Screenshot :
*  ![DataADD](https://github.com/user-attachments/assets/6f3a2665-8e4b-4c9f-a4b5-bfcd755d6f84)
* **Edit and Delete Functionality:** Allows users to modify or remove existing records.
*  Screenshot :
*  Editing mode :
*  ![DataEDITING](https://github.com/user-attachments/assets/8b05fdab-87f0-4f4b-a3e5-7d143f749ba1)
*  Deleting Confrimation :
*  ![Deleting](https://github.com/user-attachments/assets/519e5edf-dc95-4c2c-a9ca-14fb4762fd66)
* **Visual Feedback:** Provides visual cues (e.g., background color, "E" symbol) to indicate edited cells.
*  Screenshot :
*  ![1 DataEDITING](https://github.com/user-attachments/assets/6047e0a2-9b1e-4dbe-9aef-f8167e77a983)
* **Dynamic Scrolling:** Automatically adds a vertical scrollbar to the table when necessary.
*  Screenshot :
*  ![scroll](https://github.com/user-attachments/assets/0da00098-475e-4247-aaa8-0a025c7c259e)
**How to Use:**

1. **Add Student:**
   - Fill in the required fields in the registration form.
   - Click the "Submit" button to add a new student record to the table.

2. **Edit Student:**
   - Click the "Edit" button next to the desired student record.
   - Modify the fields as needed.
   - Click the "Submit" button to save the changes.

3. **Delete Student:**
   - Click the "Delete" button next to the desired student record.
   - Confirm the deletion in the prompt.

**Technologies Used:**

* **HTML:** Defines the structure of the web page.
* **CSS:** Styles the appearance of the page.
* **JavaScript:** Handles user interactions, data validation, storage, and table manipulation.

**Note:**

- The system currently stores data locally. For more robust data management, consider implementing a backend database.
- Future enhancements could include features like search functionality, export/import capabilities, and advanced validation rules.

**To Run the System:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/student-registration-system
   ```
2. **Open the `index.html` File:**
   - Open the `index.html` file in a web browser.
