#list
list_example = ['something', 'example', 'anything']

list_example.sort() #key=str.lower
print(list_example)
list_example_copy = list_example[:]
sorted(list_example, key=str.lower) #не меняет оригирнальный лист

#set
set_example = {1, 'example', 2, 'something'}
    #хранение без дупликатов, нахождение общих элементов

    # & сравнить / | объединить / - разница / < если в нем все что есть в другом

#dict
dict_example = {'age': 15, 'name': 'Zakhar', 'surname': 'Saam'}
    #хранение по ключам
dict_example.get('age')
dict_example.pop('age') #возвращает и удаляет ключ из дикт
dict_example.popitem() #returning and deleting last added key

#tuple
tuple_example = ('pentagon', 'secret', 'coords')
    #неизменяемая информация

#.key .values .append .pop .add 



#map()

list_test = [5, 10, 20]

def double(n):      ##можно так же с лямбдой
    return n * 2

doubled_n_list = map(double, list_test) #применяет функцию к списку

print(list(doubled_n_list))

#filter()

list_test = [5, 10, 20]

def isEven(number):
    return number % 2 == 0

even_check = filter(isEven, list_test) 

#выводит значения из списка которые соответствуют функции, также работает 
# с лямбдой (фильтрует)

print(list(even_check))

#reduce()

from functools import reduce

expences = [
    ('car_wash', 120),
    ('repair', 200),
    ('paint', 150)
]

sum = reduce(lambda a, b: a + b[1], expences, 0)

#принимает функцию и применяет ее к элементам списка по очереди. a = первый элемент,
#b = второй элемент. третье значение это начальное значение

print(sum)