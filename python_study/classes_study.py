class Animal:
    def walk(self):
        print('walking')

class Dog(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __gt__(self, other):
        return True if self.age > other.age else False
    
    def bark(self):
        print('woof')

zarbazan = Dog('zarbazan', 6)
busya = Dog('Busya', 2)

print(zarbazan > busya)
#сравнивает два объекта класса

print(zarbazan.name)
print(zarbazan.age)
zarbazan.bark()



class Parrot:
    def eat(self):
        print('eating parrot food')

class Cat:
    def eat(self):
        print('eating cat food')

animal1 = Parrot()
animal2 = Cat()

animal1.eat()
animal2.eat()

#на обоих сработает одна функция по своему
#в зависимости от класса объекта