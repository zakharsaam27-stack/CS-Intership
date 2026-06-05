def sqrt(number):
    print(number ** 0.5)

#то же самое что и

lambda x : x ** 0.5

sqrt(25)
print((lambda x : x ** 0.5)(25))