from dotenv import load_dotenv, dotenv_values

dotenv_values = dotenv_values()
# print(dotenv_values)
print(dotenv_values.get('SECRET'))

import os
print(os.getenv("SECRET"))
