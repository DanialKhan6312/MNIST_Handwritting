from keras.layers import Dense, Flatten, Conv2D, Activation,MaxPooling2D,Dropout,BatchNormalization,AveragePooling2D,Input,ZeroPadding2D,Add
from keras.models import Model
def model (shape, classes):
    input = Input(shape)
    X = Conv2D(32, (3, 3))(input)
    X = Flatten()(X)
    X = Dense(10, activation = "softmax")(X)
    model = Model(inputs=input,outputs=X, name ='mynet')
    return model
mymodel = model((28,28,1), 10)
mymodel.summary()
mymodel.compile(loss = 'categorical_crossentropy', optimizer = 'adam',metrics=['accuracy'])
mymodel.fit(train_data="Your training data",epochs = 1,validation_data="Your validation data")