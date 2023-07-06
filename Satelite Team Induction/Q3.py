# Creating A Recursive Fuction
def fun(n):
    if n==1:
        return 2
    else:
        return(1+(1/fun(n-1))) #Repeating for smaller numbers
        
n=int(input("Enter A Number"))
m=fun(n)
print(m)