# Exercise 1 : Convert Lists Into Dictionaries
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# numbers =  zip(keys, values)
# print(dict(numbers))

# Exercise 2 : Cinemax #2
# “Continuation of Exercise Cinemax of Week4Day2 XP”

# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free
# if they are between 3 and 12, the ticket is $10;
# and if they are over age 12, the ticket is $15 .
# Here is the object you will work with : family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# Using a for loop, the dictionary above, and the instructions, print out how much each family member 
# will need to pay alongside their name
# After the loop print out the family’s total cost for the movies
# Bonus: let the user input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty)
# family = {
# 	'rick': 43, 
# 	'beth': 13, 
# 	'morty': 5, 
# 	'summer': 8,
# 	'baby': 2
# }

# for name, age in family.items()
# 	if age < 3:
# 		price  = 0
# 	if age >= 3 and age <= 12:
# 		price = 10
# 	if age > 12:
# 		price = 15	
# 	print(f"{name} pays ${price}")		





# Exercise 3: Zara
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: France -> blue, Spain -> red, US -> pink, green 
# Create a dictionary called brand, and translate the information above into keys and values.
# Change the number of stores to 2.
# Print a sentence that explains who the clients of Zara are.
# Add a key called country_creation with a value of Spain to brand
# If the key international_competitors is in the dictionary, add the store Desigual.
# Delete the information about the date of creation.
# Print the last international competitor.
# Print in a sentence, the major clothes’ colors in the US.
# Print the amount of key value pairs (length of the dictionary).
# Print only the keys of the dictionary.

# brand = {
#  	'name': 'Zara',
# 	'creation_date': 1975,
# 	'creator_name': 'Amancio Ortega Gaona',
# 	'type_of_clothes': ['men, women, children, home'],
# 	'international_competitors': ['Gap', 'H&M', 'Benetton'],
# 	'number_stores': 7000
# 	'major_color': {
# 	    'France': 'blue',
# 	    'Spain': 'red',
# 	    'US': ['pink', 'green']
#     }
# }
# brand["number_stores"] = 2
# # print("People come to" + name + "for its amazing assortment of goods." + name + " has " + type_of_clothes + "which surpass the quality of its competitors like, " + international_competitors)
# brand['country_creation'] = 'Spain'
# brand['international_competitors'].append('Desigual')
# brand.pop('creation_date')
# >>> print(brand)
# {'name': 'Zara', 'creator_name': 'Amancio Ortega Gaona', 'type_of_clothes': ['men', 'women', 'children', 'home'], 'international_competitors': 'Desigual', 'number_stores': 2, 'major_color': {'France': 'blue', 'Spain': 'red', 'US': ['pink', 'green']}, 'country_creation': 'Spain'}
# print(brand['international_competitors'][-1])
# # print("the major colors in the us are")   come back to this later
# >>> print(len(brand))
# 7
# >>> for key in brand.keys():
# 	print(key)
# name
# creator_name
# type_of_clothes
# international_competitors
# number_stores
# major_color
# country_creation
# >>>


# Exercise 4 : Disney Characters
# Consider this list :

# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"] 
# Analyse these results :

#1/ print(disney_users_A) >> {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/ print(disney_users_B) >> {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ print(disney_users_C) >> {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# Use a for loop to recreate the #1 result. Tip : don’t hardcode the numbers
# Use a for loop to recreate the #2 result. Tip : don’t hardcode the numbers
# Use a method to recreate the #3 result
# Hint: The 3rd result is in the alphabetical order
# Recreate the #1 result, only if:
# The characters’ names contain the letter “i”.
# The characters’ names start with the letter “m” or “p”.

# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
# disney_users_A = enumerate(users)
# print(dict(disney_users_A))
#  OR
# >>> users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
# >>> for users in enumerate(users):
# 	print(dict(users))

# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]

# indices = list(range(len(users)))    [0, 1, 2, 3, 4]

# disney_users_A = dict(zip(users, indices))
# print(disney_users_B)

# disney_users_C = dict(zip(sorted(users), indices))
# print(disney_users_C)

# mylist = [name for name in users if "i" in name]
# disney_users_D = dict(zip([name for name in users if "i" in name]), indices)
# print(disney_users_D)






