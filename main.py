from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def cake():
    return render_template('cake.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/memory')
def memory():
    return render_template('memory.html')

@app.route('/places')
def places():
    return render_template('places.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')


if __name__ == '__main__':
    app.run(debug=True)