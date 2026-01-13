
# creating a custom exception 
class OurOfIngredientsError(Exception):
    pass

def make_chai(milk, sugar):
    if milk == 0 or sugar == 0:
        raise OurOfIngredientsError("Missing milk or sugar")
    print("Chai is ready...")
    
make_chai(0, 1) 

