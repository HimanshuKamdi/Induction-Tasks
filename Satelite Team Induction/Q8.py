n=int(input("Enter Number Of People: "))
l1=[x for x in range(1,n+1)]#Write Id of people
for i in range(len(l1)//2):    
    del l1[0:len(l1):2]#Removing people on odd places
    print(l1)
    if len(l1)<2:
        break
