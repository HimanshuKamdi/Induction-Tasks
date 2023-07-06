import pandas as pd
df=pd.read_csv('C:/Users/himan/Desktop/Induction/DSAI Induction/HEART PREDICTION/heart_failure_train.csv')
dummies=pd.get_dummies(df.Sex)
merged=pd.concat([df,dummies],axis='columns')
print(merged)