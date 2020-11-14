# Exercise 1 NINJA

from math import sqrt

C = 50
H = 30

answers = []
numbers = input("enter some csv numbers: ").split(",")

for number in numbers:
	# Q = square root of [(2 * C * D)/ H]
q = sqrt((2*C*number)/H)
answers.append(sqrt((2*C*int(number))/H))
print(','.join(answers))

# answers =[22, 24, 11]
# str.split()
# ''.join(list)


# numbers_string = "100, 150, 200"

# radius of a circle:



from math import pi
r = float(input("input the radius of a circle: "))
print("The area of the circle with radius " + str(r) + " is:" + str(pi * r**2))