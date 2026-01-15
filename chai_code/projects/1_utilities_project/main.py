import time
for i in range(5, 0, -1):
    # The \r returns the cursor to the start, and end='' prevents a newline
    print(f'\rCountdown: {i}', end='')
    time.sleep(1)
print('\rBlast off!') # Overwrite the final countdown number
# Output after 5 seconds: Blast off!
