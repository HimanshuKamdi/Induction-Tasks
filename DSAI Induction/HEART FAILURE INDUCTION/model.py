import csv
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

heart_data = pd.read_csv('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/heart_failure_train.csv')



# from sklearn.preprocessing import OneHotEncoder , OrdinalEncoder
# # ohe = OneHotEncoder(sparse=False)
# oe = OrdinalEncoder(categories=[['NAP','ASY','ATA','TA']])
# # print(heart_data['ChestPainType'].unique())
# oe.fit_transform(heart_data[['ChestPainType']])
# print(heart_data['RestingECG'].unique())
# print(heart_data['ExerciseAngina'].unique())
# print(heart_data['ST_Slope'].unique())
heart_data = pd.get_dummies(heart_data,columns = ['Sex','ChestPainType','RestingECG','ExerciseAngina','ST_Slope'])
# heart_data['Sex'].replace({'M':0,'F':0},inplace=True)
# heart_data['ChestPainType'].replace({'NAP':0,'ASY':1,'ATA':2,'TA':3},inplace=True)
# heart_data['RestingECG'].replace({'Normal':0, 'LVH':2, 'ST':1},inplace=True)
# heart_data['ExerciseAngina'].replace({'N':0, 'Y':1},inplace=True)
# heart_data['ST_Slope'].replace({'Up':0, 'Flat':1, 'Down':2},inplace=True)
print(heart_data.columns)
print(heart_data)



# X = pd.read_csv('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/heart_failure_test.csv')
# X = heart_data.drop(columns='HeartDisease', axis=1)
# Y = heart_data['HeartDisease']
# print(X)

# X.to_csv('data.csv',index=False)

# model = LogisticRegression()
# X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2,  random_state=2)

# model.fit(X_train, Y_train)


# X_train_prediction = model.predict(X_train)
# training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
# print('Accuracy on Training data : ', training_data_accuracy)

# X_test_prediction = model.predict(X_test)
# test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
# print('Accuracy on Test data : ', test_data_accuracy)

# X_train, X_test, Y_train, Y_test = train_test_split(X, Y, random_state = 42, test_size = 0.2)
# model = DecisionTreeClassifier()
# model.fit(X_train, Y_train)

# X_train_prediction = model.predict(X_train)
# training_data_accuracy = accuracy_score(X_train_prediction,Y_train,)
# print('Accuracy on Training data : ', training_data_accuracy)

# X_test_prediction = model.predict(X_test)
# test_data_accuracy = accuracy_score(X_test_prediction,Y_test)
# print('Accuracy on Test data : ', test_data_accuracy)

# f = open ('C:/Users/himan/Desktop/Heart Failure ML/data.csv',"r")
# w = open ('C:/Users/himan/Desktop/Heart Failure ML/prediction.csv',"w",newline='')
# sreader=csv.reader(f)
# writer=csv.writer(w)
# header=['ID','Prediction']
# writer.writerow(header)
# data=[]
# count=0
# for i in sreader:    
#     count+=1
#     if count>1:
#         input_data=i              
#         input_data_as_numpy_array= np.asarray(input_data)
#         input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)  
#         prediction = model.predict(input_data_reshaped)
#         p=int(prediction)
#         data=[count-1,p]
#         writer.writerow(data)
        
        