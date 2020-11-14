# Daily Challenge : Build Up A String
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”
# If it’s more than 10 characters, print a message which states “string too long”
# Then, print the first and last characters of the given text
# Construct the string character by character: Print the first character, then the second, then the third, until the full string is printed
# Example:
# The user enters “Hello Word”
# Then, you have to construct the string character by character
# H
# He
# Hel
# … etc
# Hello World
# Swap some characters around then print the newly jumbled string (hint: look into the shuffle method)
# Example:
# Hlrolelwod



# import random

# text = input("Enter something 10 characters long")

# if len(text) != 10:
# 	print("string is not long enough")
# 	exit()

# 	print('\nFirst and Last\n')
# 	print(text[0],text[-1])

# 	print("\nSlicing\n")

# 	for i in range(len(text)):
# 		print(text[0:i+1])


# text = list(text)
# random.shuffle(text)
# text = ''.join(text)

# print('\nShuffle\n')