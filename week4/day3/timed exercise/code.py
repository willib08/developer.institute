sentence = input("please enter a sentence: ")

# step 1: put sentence in a list
mylist = sentence.split(" ")
mylist.reverse()


# step 2: loop through the list backwards

mylist.revers()
print(" ".join(mylist))


# one line  ????

# print(" ".join(input("enter a sentence: ").split(" ").reverse()))



# for loop

sentence = "this is a test sentence"
mylist = sentence.split(" ")
rev_list = []
for i in range(len(mylist) -1, -1)
rev_list.append(mylist[i])

print(' '.join(rev_list))