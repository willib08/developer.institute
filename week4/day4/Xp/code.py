
# write a function to find the maximum number in a list.

# def find_max(the_list):
# 	biggest = the_list[0]
	
# 	for num in the_list:
# 		if num > biggest:
# 			biggest = num
# 	return biggest

	
	

# Exercise 1 : What Are You Learning ?
# Write a function called display_message() that prints one sentence 
# telling everyone what you are learning about in this chapter.
# Call the function, and make sure the message displays correctly.
# def display_message():
# 	print("I am learning Python")
# >>> dis_mes = ('i am learning python')
# >>> print(dis_mes)
# i am learning python
# >>>
	



# Exercise 2: What’s Your Favorite Book ?
# Write a function called favorite_book() that accepts one parameter, title.
# The function should print a message, such as “One of my favorite books is 
# Alice in Wonderland”.
# Call the function, making sure to include a book title as an argument in 
# the function call
# def fav_book(title):
# 	title = "alice in wonderland"
# 	print('one of my favorite books is: {title}' )


# Exercise 3 : Some Geography
# Write a function called describe_city() that accepts the name of a city
# and its country.
# The function should print a simple sentence, such as 
# “Reykjavik is in Iceland”.
# Give the parameter for the country a default value.
# Call your function for three different cities, at least one 
# of which is not in the default country.

# def describe_city(city, country):
# 	print(f'{city} is in {country}')
# 	describe_city(city = 'Reykjavik', country = 'Iceland')
# 	describe_city(city = 'Hong Kong', country = 'China')
# 	describe_city(city = 'Antwerp', country = 'Belgium')



# Exercise 4 : Let’s Create Some Personalized Shirts !
# Write a function called make_shirt() that accepts a size and the text of a message 
# that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it.
# Call the function once using positional arguments to make a shirt.
# Call the function a second time using keyword arguments.
# Modify the make_shirt() function so that shirts are large by default with a message that reads
#  I love Python.
# Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
# different message.

# make_shirt():int(input)

# make_shirt = int(input("What size shirt?:\n""what message: ")):
# print(make_shirt)

# if size in make_shirt = Large:
# 	print("I Love Python")
# elif size in make_shirt = Medium:
# 	print("24/7 coder")
# else size = small:
# 	print(":)")




# Exercise 5 : Magicians …
# Make a list of magician’s names.
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase
#  "the Great" to each magician’s name.
# Call show_magicians() to see that the list has actually been modified.

# magicNames = ['tom', 'jerry', 'fred', 'wilma', 'uncle uncle']
# def function(magicNames):
# 	for i in magicNames:
# 		print i

# function(magicNames)		

# for i in magicNames.insert('the great')

# print(magicNames)     ????




# Exercise 6: When Will I Retire ?
# The point of the exercise is to check is a person can retire depending on his age and his gender.
# Note : Retirement age in Israel is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return it (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age back.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message to the user informing them whether they can retire or not.
# As always, test your code to ensure it works.

# from datetime import date
# get_age = input('what is your age( year, month, day) : ')
# def calculate_age(born):
# 	today = date.today()
# 	return today.year - born.year - ((today.month, today.day) < (born.month, born.day))
# 	if i in get_age < 62:
# 		print("you cannot retire yet")
# 	elif i in get_age >= 62:
# 	print("you can retire")



# Exercise 7 :
# Write a function that accepts one parameter (a number X)
# and returns the value of X+XX+XXX+XXXX.