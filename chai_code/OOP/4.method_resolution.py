
# Method Resolution Order (MRO)


class A:
    label = "A: Base Class"
    

class B(A):
    label = "B: Child Class b"

class C(A):
    label = "C: Child Class c"

class D(B, C):  # Goes by the given order
    pass

cup = D()
print(cup.label)  # will print label from B as its first in order
