# Exercise 6: Celebrate Students
#
# Using the list of students and a list comprehension, assign to a variable named awesome_students a new list containing strings.
# For example: ["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]

def create_awesome_students():
    students = ["Tina", "Fred", "Wilma"]
    awesome_students = [student + " is awesome!" for student in students]
    return awesome_students

# Call the function and print the result

print('Exercise 6:', create_awesome_students())
# Exercise 7: Filter Foods
#
# Assign to a variable named foods_with_an_a the result of list comprehension that filters the foods tuple to only include food strings that contain the letter 'a'.
# For example, if foods is a tuple of ('Taco', 'Burrito', 'Sandwich'), foods_with_an_a would be a list equal to ['Taco', 'Sandwich']

def filter_foods_with_a():
    foods = ('Taco', 'Burrito', 'Sandwich')
    foods_with_an_a = [food for food in foods if ("a" in food or "A" in food)]
    return foods_with_an_a

# Call the function and print the result
print('Exercise 7:', filter_foods_with_a())

