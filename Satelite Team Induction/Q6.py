
n=int(input("Enter Number Of Co-ordinates ")) # Taking input
l=[]  # list to store coordinates
for i in range(n):
    a=eval(input())
    l.append(a)


for i in range((len(l))-2):
    x1=int(l[i][0])
    x2=l[i+1][0]
    x3=l[i+2][0]
    y1=l[i][1]
    y2=l[i+1][1]
    y3=l[i+2][1]
    

            
    if (y2-y1)/(x2-x1)==(y3-y2)/(x3-x2):
        if x1<x2 and x2<x3:
            l.pop(i+1)
        elif a[i][0]>x2 and x2>x3:
            l.pop(i+1)

for i in range(len(l)):  #To print coordinates in list
    print(l[i],end=' ')

