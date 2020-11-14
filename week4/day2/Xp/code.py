# Exercise 1 : Favorite Numbers
# Create a set called my_fav_numbers with your favorites numbers.
# Add two new numbers to it.
# Remove the last one.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to our_fav_numbers.

# my_fav_numbers = [1, 2, 3, 4, 8, 12, 14]
# >>> my_fav_numbers.insert(4, "5")
# >>> print(my_fav_numbers)
# [1, 2, 3, 4, '5', 8, 12, 14]
# >>> my_fav_numbers.append("16")
# >>> my_fav_numbers
# [1, 2, 3, 4, '5', 8, 12, 14, '16']


# Exercise 2: Tuple
# Given a tuple with integers is it possible to add more integers to the tuple?

# Answer:
# not possible


# Exercise 3: Print A Range Of Numbers
# Use a for loop to print the numbers from 1 to 20, inclusive.
# x = range(1, 21, 1)
# for n in x:
# 	print(n)



# Exercise 4: Floats
# Recap – What is a float? What is the difference between an integer and a float?
		#  a float converts a number into a decimal example: 3 is 3.0 
		# the difference between an integer and a float: Integer ( int ): represents positive or negative whole numbers 
		# like 3 or -512. Floating point number
		# ( float ): represents real numbers like 3.14159 or -2.5

# Can you think of another way of generating a sequence of floats?
# Create a list containing the sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 without hard-coding the sequence.

# >>> x = range(1, 6)
# >>> for n in x:
# 	print(float(n))                   ?

	
# 1.0
# 2.0
# 3.0
# 4.0
# 5.0

# Exercise 5: Shopping List
# Consider this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# >>> my_list = ["banana", "apples", "oranges", "blueberries"]
# >>> my_list
# ['banana', 'apples', 'oranges', 'blueberries']
# >>> my_list.remove("banana")
# >>> my_list
# ['apples', 'oranges', 'blueberries']

# # Remove “Blueberries” from the list.
# >>> my_list.remove("blueberries")
# >>> my_list
# ['apples', 'oranges']

# # Put “Kiwi” at the end of the list.
# >>> my_list.append("kiwis")
# >>> my_list
# ['apples', 'oranges', 'kiwis']
# # Add “Apples” at the beginning of the list.
# >>> my_list.insert("apples")
# Traceback (most recent call last):
#   File "<pyshell#40>", line 1, in <module>
#     my_list.insert("apples")
# TypeError: insert expected 2 arguments, got 1
# # Count how many apples are in the basket. 1
# # Empty the basket.
# del my_list
# # Print(basket)
# >>> print(mylist)
# Traceback (most recent call last):
#   File "<pyshell#44>", line 1, in <module>
#     print(mylist)
# NameError: name 'mylist' is not defined



# Exercise 6 : Loop
# Write a while loop that will keep asking the user for input until the input is the same as your name.
# name = int(input("what is your name?"))
# while input != "Anna":
# 	print("what is your name")      ?

# 	input == "Anna":
# 	print("thats my name too")


# Exercise 7
# Given a list, use a while loop to print out every element which has an even index.
# >>> number_list = list(range(15))
# >>> print(number_list[1::2])
# [1, 3, 5, 7, 9, 11, 13]


# Exercise 8
# Make a list of the multiples of 3 from 3 to 30. Use a for loop to print the numbers in your list.
# lst = [x for x in range(0, 21) if x % 3 == 0]

# Exercise 9
# Use a for loop to find numbers between 1500 and 2700, which are divisible by 7 and multiples of 5.
# >>> new_list = []
# >>> for x in range(1500, 2701):
# 	if (x%7==0) and (x%5==0):
# 		new_list.append(str(x))
# 		print(','.join(new_list))



# Exercise 10: Favorite Fruits
# Ask the user to type in his/her favorite fruit(s) (one or several fruits).
# Hint : Use the input built in method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list. (How can we ‘convert’ a string of words into a list of words?).
# Now that we have a list of fruits, ask the user to type in the name of any fruit.
# If the user’s input is a fruit name existing in the list above, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT a fruit name existing in the list above, print, “You chose a new fruit. I hope you enjoy it too!”.
# Bonus: Display the list in a user friendly way : add the word “and” before the last fruit in the list – but only if there are more than 1 favorites!




# Exercise 11: Who Ordered A Pizza ?
# Write a loop that prompts the user to enter a series of pizza toppings until they enter a ‘quit’ value.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exit print all the toppings on the pizza and what the total is (10 + 2.5 for each topping)



# Exercise 12: Cinemax
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free
# if they are between 3 and 12, the ticket is $10;
# and if they are over age 12, the ticket is $15 .
# Apply it to a family, ask the user what the age of each of the people that want a ticket is.
# Store the total cost of all the tickets for this group and print it out.
# A group of teenagers is coming to your movie theater and want to see a movie that is restricted for people between 16 and 21 years old.
# Write a program that ask every user their age, and then tell them which one can see the movie.
# Tip: Try to add the allowed ones to a list.


# Exercise 13 : Who Is Under 16?
# This time you have a list of users, and you want to remove every user that is below 16 years old.
# Write a program that ask every user their age, and if they are less than 16 years old, remove them from the list.
# At the end, print the final list.



# Exercise 14: Family Members
# Using a while loop keep asking a user for input, these inputs will be used to control a menu
# On the menu we will have 4 options:
# Add a name
# If the user selects this ask for the name to add
# Remove an existing name
# If the user selects this ask for the name to remove
# View family members
# Print a nice list of the family members names
# Exit