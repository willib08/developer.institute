# # Exercise 1
# # Write a script that inserts an item at a defined index in a list.
#  first_function = [1, 2, 3, 5, 7, 9, 11]
#  first_function.insert(4, 12)
#  print(first_function)
#  

# Exercise 2
# Write a script that counts the number of spaces in a string.
# spaces = input("Enter the value ")
# Enter the value "My Testing String"
# spaces.count(' ')
# 2

# Exercise 3
# Write a script that calculates the number of upper case letters and 
# lower case letters in a string		


# def count_by_case(string):
# 	upper = sum(letter.isupper() for letter in string)
# 	lower = sum (letter.islower() for letter in string)
# 	return lower, upper

# string = "My Head HUrts"
# lower, upper = count_by_case(string)
# print("{!r} contains {} upper and {} lower case letters".format(string, upper, lower))	


# Exercise 4
# Write a function to find the max of a list
# x = max(10, 20, 15, 34, 17)
# print(x)	

# Exercise 5
# Write a function that return factorial of a number
# import math

# print(math.factorial(12))        479001600
# print(math.factorial(8))		   40320	
# print(math.factorial(5))		    120

# Exercise 6
# Write a function to find the sum of an array without using the built in function:
# def find_total(myList):
# 	total = 0
# 	for number in my list:
# 		total += number
# 		return total


# 
# Exercise 7
# Write a function that counts an element in a list (without using the count method):
# len([a for a in [1, 2, 1, 4, 1, 3, 5] if a ==1])

# Exercise 8
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

# numbers = [1,2,5,7]
# sq = 0
# for val in numbers:
# 	sq = val * val()
# /////
# ?????????????????????

# Exercise 9
# Write a function to find if an array is monotonic (sorted either ascending of descending)
# def isMonotonic(A):
# 	A = [10, 9, 8, 7, 2, 1]
# 	return (all(A[i] <= A[i + 1] for i in range(len(A) - 1)) or all(A[i] >= A[i + 1] for i in range(len(A) - 1))
# print(isMonotonic(A))

# solution found on google...

# Exercise 10
# Write a function that prints the longest word in a list.
# def long_word(mywords):
# 	longestWord = ""
# 	max_len = 0

# 	for word in mywords:
# 		if len(word) >= max_len:
# 			longestWord = len(word)
# 			longestWord = word
# 		return longestWord	


# my_words = ['hello', 'i', 'am', 'trying', 'hard', 'to', 'understand']
# print(my_words)
# result = max(my_words, key = len)
# print('The longest word in the array is: ' + result)

