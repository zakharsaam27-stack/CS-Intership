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