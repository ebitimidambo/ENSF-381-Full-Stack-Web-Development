from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

def load_json(filename):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, filename) 
    with open(file_path, "r") as file:
        return json.load(file)

@app.route("/courses", methods = ["GET"])
def get_courses():
    data = load_json('data/courses.json')

    if (request.args):
        number = request.args.get("number", type=int)
        if number is not None and 0 <= number < len(data):
            return(jsonify(data[number]))
        else:
            return ("error: Invalid course nummber"), 400
    else:
        return jsonify(data)

@app.route("/testimonials", methods = ["GET"])
def get_testimonials():
    number = request.args.get("number", type=int)
    data = load_json('data/testimonials.json')

    if number is not None and 0 <= number < len(data):
        return(jsonify(data[number]))
    else:
        return ("error: Invalid course nummber"), 400

# Student information using a python list
STUDENTS = {
    "ogechukwu": {"ID": 1,
                  "Username":"ogechukwukanu", 
                  "Password": "Lady128$", 
                  "Email":"", 
                  "Enrolled Courses":[]
                  },
    "divine":    {"ID": 2,
                  "Username":"divinenyamadi", 
                  "Password": "Man129$$$", 
                  "Email":"", 
                  "Enrolled Courses":[]
                  },
    "sajad":     {"ID": 3,
                  "Username":"sajadsarlaki", 
                  "Password": "Man130$", 
                  "Email":"", 
                  "Enrolled Courses":[]
                  }
}

@app.route("/register", methods = ["POST"])
def user_signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")
    found = False

    for key in STUDENTS:
        if (STUDENTS[key]["Username"] == username):
            found = True

    if found == False:
        last_key = list(STUDENTS)[-1]
        last_id = STUDENTS[last_key]["ID"]
        STUDENTS.update({username: {"ID": last_id + 1, 
                                    "Username": username, 
                                    "Password": password, 
                                    "Email": email, 
                                    "Enrolled Courses": []}
                                    })
        print(STUDENTS)
        return jsonify({"success": True, "message": "Signup successful."})
    else:
        return jsonify({"success": False, "message": "Invalid username or password."}), 401

@app.route("/login", methods = ["POST"])
def user_login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    found = False
    Id = 0

    for key in STUDENTS:
        if (STUDENTS[key]["Username"] == username and STUDENTS[key]["Password"] == password):
            found = True
            Id = STUDENTS[key]["ID"]

    if found == True:
        return jsonify({"success": True, "message": "Login successful.", "Id": Id})
    else:
        return jsonify({"success": False, "message": "Invalid username or password."}), 401
    
@app.route("/student_courses/<student_id>", methods=["GET"])
def get_student_courses(student_id):
    courses = load_json("data/courses.json")

    for student in STUDENTS.values():
        if str(student["ID"]) == student_id:
            enrolled_ids = student["Enrolled Courses"]
            enrolled_courses = [course for course in courses if course["id"] in enrolled_ids]
            return jsonify(enrolled_courses)

    return jsonify([])

@app.route("/enroll/<student_id>", methods=["POST"])
def enroll_course(student_id):
    data = request.json
    course_id = data.get("id")

    for student in STUDENTS.values():
        if str(student["ID"]) == student_id:
            if course_id not in student["Enrolled Courses"]:
                student["Enrolled Courses"].append(course_id)
                return jsonify({"success": True, "message": "Enrolled successfully."})
            else:
                return jsonify({"success": False, "message": "Already enrolled in this course."}), 400

    return jsonify({"success": False, "message": "Student not found."}), 404


@app.route("/drop/<student_id>", methods=["DELETE"])
def drop_course(student_id):
    data = request.json
    course_id = data.get("id")

    for student in STUDENTS.values():
        if str(student["ID"]) == student_id:
            if course_id in student["Enrolled Courses"]:
                student["Enrolled Courses"].remove(course_id)
                return jsonify({"success": True, "message": "Course dropped successfully."})
            else:
                return jsonify({"success": False, "message": "Course not found in enrolled list."}), 400

    return jsonify({"success": False, "message": "Student not found."}), 404

if __name__ == "__main__":
    app.run(debug=True)
