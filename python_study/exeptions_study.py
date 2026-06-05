try:
#пробует выполнить дейтсвие
    result = 2 / 0
except ZeroDivisionError:
#если указанная ошибка выходит, то:
    print('Cannot divide by zero')
finally:
#выполняется всегда даже если выйдет ошибка
    result = 1

print(result)



class DogNotFoundException(Exception):
    print('smth')
    pass

try:
    raise DogNotFoundException()
except DogNotFoundException:
    print('Dog not found')


filename = '/Users/Anyone/test.txt'

with open(filename, 'r') as file:
    content = file.read()
    print(content)

#автоматически закроет файл даже если произойдет ошибка
