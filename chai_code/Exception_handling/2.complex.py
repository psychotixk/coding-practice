

def server_chai(flavor):
    try:
        print(f"Preparing {flavor} chai..")
        if flavor == "unknown":
            raise ValueError("We don't know that flavor")
    except ValueError as e:
        print("Error:", e)
    else:
        print(f"{flavor} chai is served")
    finally:
        print("Next customer please")
        

server_chai("Masala")
server_chai("unknown")