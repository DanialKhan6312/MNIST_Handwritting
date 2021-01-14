import os
import re
import tensorflow as tf
from keras.models import Sequential, load_model
from keras.preprocessing import image
import numpy as np
from PIL import Image, ImageOps
from io import BytesIO
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
        base = os.path.dirname(__file__)
        filepath = os.path.join(base, 'uploads', 'image.jpg')
        raw_data = str(request.form.get('base64')+'=')
        print (raw_data)
        base64_data = re.sub('^data:image/.+;base64,', '', raw_data)
        byte_data = base64.b64decode(base64_data)
        image_data = BytesIO(byte_data)
        rawimg = Image.open(image_data)
        img = Image.new("L", rawimg.size, (255))
        img.paste(rawimg, rawimg)
        drawing=ImageOps.invert(img)
        drawing = drawing.resize((28, 28))
        drawing.save(filepath)
        print ('written')
        mynet=load_model("Model")
        im=image.load_img(filepath,grayscale = True)
        im=image.img_to_array(im, data_format="channels_last")

        print (im)
        im=np.expand_dims(im,axis=0)
        imggen= image.ImageDataGenerator(rescale =1/255)
        print (im.shape)
        data = imggen.flow(im)
        print (data)
        pred =mynet.predict(data)
        ans=str((np.argmax(pred, axis=1))[0])

    return (ans);
if __name__ == '__main__':
   app.run(debug = True)