class Animal:
    def walk(self):
        print('walking')

class Dog(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print('woof')

pet_name = Dog('zarbazan', 6)

print(pet_name.name)
print(pet_name.age)
pet_name.bark()
