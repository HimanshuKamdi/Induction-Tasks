#Taking input Of matrix
s=int(input("Enter Number Of columns and rows of Area Matrix: "))
l=[]
print("Enter the numbers in matrix: ")
for i in range(s):
    l1=list(map(int,input().split()))
    l.append(l1)
m=0
#Making a function to find path
def path(m,n):
    
    try:#to prevent excessive reccursion
        if n ==1:  #if only 1 numbers remains
            print(l[(s-1)/2][(s-1)/2])
        else:#print outside number of matrix
            for i in range(m,n):
                print(l[m][i],end=' ')
            for i in range(m+1,n):
                print(l[i][n-1],end=' ')
            for i in range(n-2,m-1,-1):
                print(l[n-1][i],end=' ')
            for i in range(n-2,m,-1):
                print(l[i][m],end=' ')
            path(m+1,n-1) #Using recursion for print inside numbers
    except:
        print()
path(m,s) 
    

