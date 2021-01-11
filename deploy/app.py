import os
import base64
import json
from flask import Flask, render_template, request
app = Flask(__name__,static_url_path='/static')
@app.route('/',methods = ['GET','POST'])
def index():

    return render_template('index.html')
@app.route('/ans',methods = ['GET','POST'])
def ans():
    if request.method == 'POST':
        print("hi");
        raw_data = request.data
        print(raw_data)
        #data=raw_data.json()
        #with open('data.json', 'w') as f:
        #    json.dump(data, f)

        #with open('./image.jpg', 'wb') as fh:
           # fh.write(base64.decodebytes(img_data))
    return ("hi");
if __name__ == '__main__':
   app.run(debug = True)