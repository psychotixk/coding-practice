












print("Welcome to treaser island ")
print("Your mission is to find the treasure.")
print("You're at cross road. Wherer do you want to go? ")
choice1 = input('         Type "left" or "right"\n ').lower()

if choice1 == "right":
    print("You fell into a hole. Game Over")
elif choice1 == "left":
    choice2 = input("Do u want to swin or wait? Type 'swim or anything else' or 'wait': ").lower()
    if choice2 == "wait":
        choice3 = input("You've arrived at island. "
                        "There's a house with 3 doors, 1 Red, 1 Blue, and 1 Blue. "
                        "Which color do you choose? ").lower()
        if choice3 == "blue":
            print("You got eaten by beasts. Game over")
        elif choice3 == "red":
            print("Burned by fire. Game Over.")
        elif choice3 == "yellow":
            print("You win!")
        else:
            print("You choose wrong door. Game Over.")
    else:
        print("You get attacked by trout. Game Over")
else:
    print("Wrong choice. You're dead")
            
            