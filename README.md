# Simple Notes App 📝

A web-based notes application built with **Flask**, **Flask-WTF**, **MongoDB**, and **Bootstrap**.  
Users can **add tasks**, view existing tasks, and **delete tasks** dynamically.

---

## Features

- Add new notes with **task title** and **content**.
- Display all tasks stored in MongoDB.
- Delete individual tasks.
- Responsive UI using **Bootstrap 5**.
- Form validation with **Flask-WTF**.

---

## Technologies Used

- **Backend**: Python, Flask, Flask-WTF  
- **Database**: MongoDB (PyMongo)  
- **Frontend**: Bootstrap 5, Jinja2 templates  
- **Forms**: Flask-WTF, WTForms  

---

## Folder Structure

notes-app/
│
├── app.py # Main Flask application
├── templates/
│ └── notes.html # HTML template
├── static/
│ ├── css/
│ │ └── bootstrap.min.css
│ └── js/
│ └── bootstrap.bundle.min.js
├── README.md
└── requirements.txt # Python dependencies

yaml
Copy code

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd notes-app
Create a virtual environment

bash
Copy code
python -m venv env
source env/bin/activate        # Linux/Mac
env\Scripts\activate           # Windows
Install dependencies

bash
Copy code
pip install -r requirements.txt
Set up MongoDB

Make sure MongoDB is installed and running locally.

The app uses a database named notes_app and a collection named tasks.

Run the Flask app

bash
Copy code
python app.py
Open the app in your browser

cpp
Copy code
http://127.0.0.1:5000/
Usage
Add a task: Fill in the task title and content, then click Add task.

Delete a task: Click the Delete button next to a task.

Dependencies
Flask

Flask-WTF

WTForms

PyMongo

Bootstrap 5 (local files or CDN)

License
This project is licensed under the MIT License.

Screenshots
(Optional: Add screenshots of the app here if needed)

Author
Gowtham K
