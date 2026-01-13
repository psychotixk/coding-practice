



users = [
    {"id": 1, "total": 100, "cupoon": "P22" },
    {"id": 1, "total": 150, "cupoon": "F20" },
    {"id": 3, "total": 80, "cupoon": "P21" },
]

discounts = {
    "P22" : (0.2, 0),
    "F20" : (0.5, 0),
    "P21" : (0, 10),
}

for user in users:
    percent, fixed = discounts.get(user["cupoon"], (0, 0))
    discount = user["total"] * percent + fixed
    print(f"{user["id"]} paid {user["total"]} and got discount for next visit of ruppes {discount}")