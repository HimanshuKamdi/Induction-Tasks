str = input("Enter The string: ")
c = 0 
for item in set(str):
    if str.count(item)%2 != 0:
        c+=1 
if (c>1):
    print("Palindrome cannot be formed")  #If more than one characters are in odd multiples it cannot form palindrome
else:
    print("Palindrome can be formed")