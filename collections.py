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