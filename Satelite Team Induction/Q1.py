#Shortest approaach
# l1=set(map(int,input().split()))
# l2=set(map(int,input().split()))

# print(l1.union(l2))

#Another approach without use of set or sort function

l1=list(map(int,input().split()))
l2=list(map(int,input().split()))
l3=l1+l2
final_list = []
for i in l3:
    if i not in final_list:
        final_list.append(i)

#Using Bubble Sort Algorithm
for i in range(len(final_list)-1):
    for j in range(0,len(final_list)-i-1):
        if final_list[j]>final_list[j+1]:
            final_list[j],final_list[j+1]=final_list[j+1],final_list[j]
print(final_list)
    

