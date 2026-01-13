# a simple program for pizza delivary program


print("welcome to Pizza hunt")
size = input("What size of pizza do you want? S, M, or L: ").upper()
extra_cheese = input("Do you want extra cheese? Y or N: ").upper()
pepperoni = input("Do you want pepporini on your pizza? Y or N: ").upper()


# todo 1: work out how much they need to pay based on their size choice.
# todo 2: work out how much to add to their bill based on their pepperioni choice.
# todo 3: work out thier final amount  based on whether if they want extra cheese.

# checking pizza price based on size
bill = 0    # initial bill is 0

if size == "S":
    bill = 5
elif size == "M":
    bill = 8
elif size == "L":
    bill = 10
else:
    print("You enter wrong input.")

#checking whether a customer wants pepporini or not
if pepperoni == "Y":
    bill += 2

#checking whether user wants extra cheese or not
if extra_cheese == "Y":
    bill += 2

print(f"Your final bill is ${bill}.")
print("please enjoy your pizza. Visit us again <3")