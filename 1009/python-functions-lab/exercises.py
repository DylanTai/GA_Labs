# Exercise 1: Calculate Area of a Triangle
#
# Write a function named `calculate_area_triangle` that takes the base and height of a triangle and returns the area.
# The area formula is (base * height) / 2.
#
# Examples:
# calculate_area_triangle(10, 5) should return 25.0.
# calculate_area_triangle(7, 3) should return 10.5.
#
# Define your function and call it below.

def calculate_area_triangle(base, height):
    area = (base * height) / 2
    return area

print('Exercise 1:')
print('calculate_area_triangle(10, 5) =', calculate_area_triangle(10, 5))
print('calculate_area_triangle(7, 3) =', calculate_area_triangle(7, 3))
print()


# Exercise 2: Calculate Simple Interest
#
# Write a function named `simple_interest` that takes principal, rate of interest (as a percentage), and time (years).
# Calculate and return the simple interest using the formula (principal * rate * time) / 100.
#
# Examples:
# simple_interest(1000, 5, 2) should return 100.
# simple_interest(1500, 3.5, 5) should return 262.5.
#
# Define your function and call it to see the result.

def simple_interest(principal, rate, time):
    interest = (principal * rate * time) / 100
    return interest

print('Exercise 2:')
print('simple_interest(1000, 5, 2) =', simple_interest(1000, 5, 2))
print('simple_interest(1500, 3.5, 5) =', simple_interest(1500, 3.5, 5))
print()


# Exercise 3: Apply a Discount
#
# Write a function named `apply_discount` that takes a product's price and a discount percentage (from 0 to 100).
# Return the new price after applying the discount.
#
# Examples:
# apply_discount(100, 25) should return 75.
# apply_discount(80, 10) should return 72.
#
# Define your function and call it to display the discounted price.

def apply_discount(price, discount_percentage):
    discount_amount = (price * discount_percentage) / 100
    new_price = price - discount_amount
    return new_price

print('Exercise 3:')
print('apply_discount(100, 25) =', apply_discount(100, 25))
print('apply_discount(80, 10) =', apply_discount(80, 10))
print()


# Exercise 4: Convert Temperature
#
# Write a function called `convert_temperature` that takes a
# temperature and a unit ('C' for Celsius, 'F' for Fahrenheit)
# and converts the temperature to the other unit.
# The formula for converting Celsius to Fahrenheit is (Celsius * 9/5) + 32.
# The formula for converting Fahrenheit to Celsius is (Fahrenheit - 32) * 5/9.
#
# Examples:
# convert_temperature(0, 'C') should return 32.0.
# convert_temperature(32, 'F') should return 0.0.
#
# Define the function and then call it below.

def convert_temperature(temp, unit):
    if unit == 'C':
        converted_temp = (temp * 9/5) + 32
        return converted_temp
    elif unit == 'F':
        converted_temp = (temp - 32) * 5/9
        return converted_temp

print('Exercise 4:')
print("convert_temperature(0, 'C') =", convert_temperature(0, 'C'))
print("convert_temperature(32, 'F') =", convert_temperature(32, 'F'))
print()


# Exercise 5: Sum to N
#
# Write a function named `sum_to` that takes a single integer n and returns the sum of all integers from 1 to n.
#
# Examples:
# sum_to(6) should return 21.
# sum_to(10) should return 55.
#
# Define the function and then call it below.

def sum_to(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total

print('Exercise 5:')
print('sum_to(6) =', sum_to(6))
print('sum_to(10) =', sum_to(10))
print()


# Exercise 6: Find the Largest Number
#
# Write a function named `largest` that takes three integers as arguments and returns the largest of them.
#
# Examples:
# largest(1, 2, 3) should return 3.
# largest(10, 4, 2) should return 10.
#
# Define your function and test it with different inputs.

def largest(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3

print('Exercise 6:')
print('largest(1, 2, 3) =', largest(1, 2, 3))
print('largest(10, 4, 2) =', largest(10, 4, 2))
print()


# Exercise 7: Calculate a Tip
#
# Create a function called `calculate_tip`. It should take the bill amount and the tip percentage (as a whole number).
# The function should return the amount of the tip.
#
# Examples:
# calculate_tip(50, 20) should return 10.
#
# Write your function and test its output below.

def calculate_tip(bill_amount, tip_percentage):
    tip_amount = (bill_amount * tip_percentage) / 100
    return tip_amount

print('Exercise 7:')
print('calculate_tip(50, 20) =', calculate_tip(50, 20))
print()


# Exercise 8: Calculate Product of Numbers
#
# Write a function named `product` that takes an arbitrary number of numbers, multiplies them, and returns the product.
# Review your notes on *args for handling an arbitrary number of arguments.
#
# Examples:
# product(-1, 4) should return -4.
# product(2, 5, 5) should return 50.
#
# Define the function and call it with different sets of numbers to test.

def product(*args):
    result = 1
    for num in args:
        result *= num
    return result

print('Exercise 8:')
print('product(-1, 4) =', product(-1, 4))
print('product(2, 5, 5) =', product(2, 5, 5))
print()


# Exercise 9: Basic Calculator
#
# Create a function named `basic_calculator` that takes three arguments: 
# two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). 
# Perform the provided operation on the two numbers. In operations where the order of numbers is important, 
# treat the first parameter as the first operand and the second parameter as the second operand.
#
# Examples:
# basic_calculator(10, 5, 'subtract') should return 5.
# basic_calculator(10, 5, 'add') should return 15.
# basic_calculator(10, 5, 'multiply') should return 50.
# basic_calculator(10, 5, 'divide') should return 2.
#
# Define the function and then call it below.

def basic_calculator(num1, num2, operation):
    result = 0
    if operation == 'add':
        result = num1 + num2
    elif operation == 'subtract':
        result = num1 - num2
    elif operation == 'multiply':
        result = num1 * num2
    elif operation == 'divide':
        result = num1 / num2
    return result

print('Exercise 9:')
print("basic_calculator(10, 5, 'subtract') =", basic_calculator(10, 5, "subtract"))
print("basic_calculator(10, 5, 'add') =", basic_calculator(10, 5, "add"))
print("basic_calculator(10, 5, 'multiply') =", basic_calculator(10, 5, "multiply"))
print("basic_calculator(10, 5, 'divide') =", basic_calculator(10, 5, "divide"))