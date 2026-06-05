name = 'zakhar'; print(name)
print('yes' if name == 'zakhar' else 'no')

#or либо первое True либо последнее значение
#and либо первое False либо последнее значение 

list_exmpl = [1, 2, 3, 4, 5]
print(2 in list_exmpl)

s1 = True
s2 = False
s_any = any([s1, s2])
s_all = all([s1, s2])
print(s_any)
print(s_all)

#built-in func
round(5.5)