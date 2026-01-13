print("Welcome to roller rollercoaster!")

height = int(input("Enter your height (cm): "))
bill = 0

if height >= 20:
    print("you can ride the rollercoaster")
    age = int(input("Enter your age: "))
    if age <= 12:
        bill = 5
        print("Child tickets are $5")
    elif age <= 18:
        bill = 7
        print("Youth tickets are $7")
    else:
        bill = 12
        print("Adult tickets are $12")
    want_photos = input("Do you want photo taken? Y or N  ")
    if want_photos == "y":
        # add $3 to their age
        bill += 3
        print(f"Your bill with photos is ${bill}")
else:
    print("Sorry, you're too short to ride rollercoaster.")