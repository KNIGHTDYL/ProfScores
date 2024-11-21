from flask import Flask, request, jsonify
from flask_cors import CORS
import ratemyprofessor

app = Flask(__name__)
CORS(app)

@app.route('/search_professor', methods=['POST'])
def search_professor():
    data = request.json
    first_name = data.get('fname')
    last_name = data.get('lname')
    university = data.get('uname')
    
    try:
        school = ratemyprofessor.get_school_by_name(university)
        if not school:
            return jsonify({"error": "School not found"}), 404
            
        professor = ratemyprofessor.get_professor_by_school_and_name(school, f"{first_name} {last_name}")
        if not professor:
            return jsonify({"error": "Professor not found"}), 404
            
        return jsonify({
            "name": professor.name,
            "department": professor.department,
            "school": professor.school.name,
            "rating": professor.rating,
            "difficulty": professor.difficulty,
            "numRatings": professor.num_ratings,
            "wouldTakeAgain": professor.would_take_again
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
