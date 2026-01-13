import random


list = ["rock", "paper", "scissors"]

user_choice = int(input("What do you choose? Type 0 for rock, 1 for paper or 2 for scissors: "))
print(f"You choosed: {list[user_choice]}")



computer_choice = random.randint(0,2)
print(f"Computer choosed: {list[computer_choice]}")

# rocks wins against scissors,   0 and 2
# scissors wins against paper,   2 and 1
# paper wins against rock,       1 and 0



if user_choice == 0 and computer_choice == 2:
    print("You wins")
elif user_choice > 2 or user_choice < 0:
    print("You typed invalid number. You loose")
elif computer_choice == 0 and user_choice == 2:
    print("You loose")
elif user_choice > computer_choice:
    print("You win")
elif computer_choice > user_choice:
    print(" You loose")
elif computer_choice == user_choice:
    print("Draw")
     
    
    