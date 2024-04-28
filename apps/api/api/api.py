import os
import random

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

dir_path = os.path.dirname(os.path.realpath(__file__))

def read_lines(filepath):
    with open(filepath, 'r') as f:
        lines = [line.rstrip() for line in f.readlines()]
        return lines

quotes = read_lines(f"{dir_path}/quotes.txt")

@app.get("/")
async def read_root():
    quote = random.choice(quotes)
    return {"Nietzsche says": quote}
