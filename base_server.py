from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
import datetime
from flasgger import Swagger

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///anomaly.db'  
app.config['JWT_SECRET_KEY'] = 'AleenaMariaRajesh'

db = SQLAlchemy(app)
jwt = JWTManager(app)
swagger = Swagger(app)

class AnomalyMeta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    anomaly_type = db.Column(db.String(100), nullable=False)
    geolocation = db.Column(db.String(200), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)

    def get_val(self):
        return {
            'id': self.id,
            'anomaly_type': self.anomaly_type,
            'geolocation': self.geolocation,
            'date_time': self.date_time.isoformat()
        }
    
with app.app_context():
    db.create_all()

@app.route('/login', methods=['POST'])
def login():
    """
    Login to get a JWT
    ---
    parameters:
      - in: body
        name: credentials
        required: true
        schema:
          type: object
          properties:
            username:
              type: string
            password:
              type: string
    responses:
      200:
        description: Login successful
        schema:
          type: object
          properties:
            access_token:
              type: string
      401:
        description: Invalid username or password
    """
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if username != 'AleenaMariaRajesh' or password != 'LiaAunty':  
        return jsonify({'msg': 'Bad username or password'}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@app.route('/add_anomaly', methods=['POST'])
# @jwt_required()
def create_anomaly():
    """
    Add a new Anomaly
    ---
    parameters:
      - in: body
        name: anomaly
        required: true
        schema:
          type: object
          properties:
            anomaly_type:
              type: string
            geolocation:
              type: string
            date_time:
              type: string
              format: date-time
    responses:
      201:
        description: Anomaly added successfully
      400:
        description: Invalid input data
    """
    try:
        data = request.get_json()
        anomaly = AnomalyMeta(
            anomaly_type=data['anomaly_type'],
            geolocation=data['geolocation'],
            date_time=datetime.datetime.strptime(data['date_time'], '%Y-%m-%d %H:%M:%S')
        )
        db.session.add(anomaly)
        db.session.commit()
        return jsonify({'msg': 'Anomaly added successfully'}), 201
    except Exception as e:
        return jsonify({'msg': 'Invalid input data', 'error': str(e)}), 400

@app.route('/get_all', methods=['GET'])
# @jwt_required()
def get_accidents():
    """
    Get all Anomalies
    ---
    responses:
      200:
        description: A list of Anomalies
        schema:
          type: array
          items:
            type: object
            properties:
              id:
                type: integer
              anomaly_type:
                type: string
              geolocation:
                type: string
              date_time:
                type: string
                format: date-time
    """
    anomalies = AnomalyMeta.query.all()
    return jsonify([anomaly.get_val() for anomaly in anomalies])

@app.route('/anomaly/<int:anomaly_id>', methods=['GET'])
# @jwt_required()
def get_accident(anomaly_id):
    """
    Get an Anomaly by ID
    ---
    parameters:
      - name: anomaly_id
        in: path
        type: integer
        required: true
    responses:
      200:
        description: The Anomaly with the given ID
        schema:
          type: object
          properties:
            id:
              type: integer
            anomaly_type:
              type: string
            geolocation:
              type: string
            date_time:
              type: string
              format: date-time
      404:
        description: Anomaly not found
    """
    anomaly = AnomalyMeta.query.get(anomaly_id)
    if anomaly:
        return jsonify(anomaly.get_val())
    else:
        return jsonify({'msg': 'Anomaly not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)