
class ChaiUtils:
    @staticmethod
# static methods doesnt require object creations
# u can directly use the classes  
    def clean_ingredients(text):
        return [item.strip() for item in text.split(",")]
    
raw = "Water, milk, ginger, sugar"
cleaned = ChaiUtils.clean_ingredients(raw) # using classes directly
print(cleaned)

        