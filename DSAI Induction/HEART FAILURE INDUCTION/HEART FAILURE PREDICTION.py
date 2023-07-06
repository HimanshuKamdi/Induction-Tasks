import csv
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score



heart_data = pd.read_csv('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/heart_failure_train.csv')

# # Replacing categorical to numerical data
# heart_data['Sex'].replace({'M':0,'F':0},inplace=True)
# heart_data['ChestPainType'].replace({'NAP':0,'ASY':1,'ATA':1,'TA':2},inplace=True)
# heart_data['RestingECG'].replace({'Normal':0, 'LVH':2, 'ST':1},inplace=True)
# heart_data['ExerciseAngina'].replace({'N':0, 'Y':1},inplace=True)
# heart_data['ST_Slope'].replace({'Up':1, 'Flat':0, 'Down':1},inplace=True)




X = heart_data.drop(columns='HeartDisease', axis=1)
Y = heart_data['HeartDisease']





X_train, X_test, Y_train, Y_test = train_test_split(X, Y, random_state = 2, test_size = 0.2)

#Comparing Accuracy of Different Models On Train While With More Data



linear_model = LogisticRegression(max_iter=1000)
linear_model.fit(X_train, Y_train)

X_train_prediction = linear_model.predict(X_train)
lineartraining_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Linear_Model Accuracy on Training data : ', lineartraining_data_accuracy)

X_test_prediction = linear_model.predict(X_test)
lineartest_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Linear_Model Accuracy on Test data : ', lineartest_data_accuracy)

tree_model = DecisionTreeClassifier()
tree_model.fit(X_train, Y_train)

X_train_prediction = tree_model.predict(X_train)
treetraining_data_accuracy = accuracy_score(X_train_prediction,Y_train,)
print('Decision_Tree Accuracy on Training data : ', treetraining_data_accuracy)

X_test_prediction = tree_model.predict(X_test)
treetest_data_accuracy = accuracy_score(X_test_prediction,Y_test)
print('Decision_Tree Accuracy on Test data : ', treetest_data_accuracy)

random_model = RandomForestClassifier()
random_model.fit(X_train, Y_train)

X_train_prediction = random_model.predict(X_train)
randomtraining_data_accuracy = accuracy_score(X_train_prediction,Y_train,)
print('Random_Forest Accuracy on Training data : ', randomtraining_data_accuracy)

X_test_prediction = random_model.predict(X_test)
randomtest_data_accuracy = accuracy_score(X_test_prediction,Y_test)
print('Random_Forest Accuracy on Test data : ', randomtest_data_accuracy)


#Predicting using More Accurate Model

linear_model = LogisticRegression(max_iter=1000)
linear_model.fit(X_train.values, Y_train)


f = open ('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/heart_failure_test.csv',"r")
w = open ('C:/Users/himan/Desktop/HEART FAILURE INDUCTION/finalsubmission.csv',"w",newline='')
sreader=csv.reader(f)
writer=csv.writer(w)
header=['Id','HeartDisease']
writer.writerow(header)
data=[]
count=0
for i in sreader:    
    count+=1
    if count>1:
        input_data=i              
        input_data_as_numpy_array= np.asarray(input_data)
        input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)  
        prediction = linear_model.predict(input_data_reshaped)
        p=int(prediction)
        data=[count-1,p]
        writer.writerow(data)
        
        