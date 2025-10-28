from flask import Flask, url_for, redirect, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from pymongo import MongoClient as mc
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['SECRET_KEY'] = 'this is secret'

class NotesForm(FlaskForm):
    task = StringField('Add a task')
    task_cont = StringField('Add content for the task')
    add = SubmitField('Add task')

client = mc('mongodb://localhost:27017/')
db = client['notes_app']

@app.route('/', methods=['GET', 'POST'])
def task():
    form = NotesForm()
    cur = db.tasks.find({})
    if form.validate_on_submit():
        doc = {
            "task": form.task.data,
            "content": form.task_cont.data
        }
        db.tasks.insert_one(doc)
        return redirect(url_for('task'))
    return render_template('notes.html', form=form, cur=cur)

@app.route('/delete/<id>')
def delete_task(id):
    db.tasks.delete_one({'_id': ObjectId(id)})
    return redirect(url_for('task'))


app.run(debug = True)