#Shortest Path

n=list(map(int,input().split())) #Taking input as a list
k=int(input()) 
# n.sort()

# Using Bubble Sort Algorithm instead of built in function
for i in range(len(n)-1):
    for j in range(0,len(n)-i-1):
        if n[j]>n[j+1]:
            n[j],n[j+1]=n[j+1],n[j]

print(n[k-1])#Printing Kth smallest element