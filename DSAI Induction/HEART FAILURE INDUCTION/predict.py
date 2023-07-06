import csv
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

tree_model = DecisionTreeClassifier()


f = open ('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/heart_failure_test.csv',"r")
w = open ('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/prediction.csv',"w",newline='')
sreader=csv.reader(f)
writer=csv.writer(w)
header=['ID','Prediction']
writer.writerow(header)
data=[]
count=0
for i in sreader:    
    count+=1
    if count>1:
        input_data=i              
        input_data_as_numpy_array= np.asarray(input_data)
        input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)  
        prediction = tree_model.predict(input_data_reshaped)
        p=int(prediction)
        data=[count-1,p]
        writer.writerow(data)