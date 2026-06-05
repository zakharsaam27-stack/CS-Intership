#def hello(name='my friend')
#   print('hello ' + name)
    ## = устанавливает значение по стандарту если оно не было
    ## введено при вызове функции

#nonlocal чтобы вытащить локальную функцию




def logtime(func):
    def wrapper():
        print('before')
        result = func() #выполнение аргумента
        print('after')
        return result 
    return wrapper

@logtime
def hello():
    print('hello')

hello() #hello = logtime(hello)

def repository_testing():
    print('some changes')

#recursion функция вызывает саму себя

def factorial(n):
    if n == 1: return 1
    return n * factorial(n - 1)

# вызывает саму себя с аргументом n - 1
# затем умножает n на результат этого вызова

print(factorial(5))

##factorial(5) = 5 * factorial(5 - 1) = 5 * 4 * factorial(4 - 1) =
##5 * 4 * 3 * factorial(3 - 1) = 5 * 4 * 3 * 2 * factorial(1)

