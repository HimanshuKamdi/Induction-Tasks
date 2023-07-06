#Shortest path with use of function
a=input("Enter string: ")
b=input("Enter substring: ")
print(a.count(b))

#Without use of count function

c=0
l=len(b)
for i in range(len(a)):
    if a[i:i+l]==b:
        c+=1
print("Number Of Occurences",c)