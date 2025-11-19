import os
import sys
from typing import Optional, Dict, Any

import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Mobile App Backend", version="1.0.0")


class UserRequest(BaseModel):
    username: str
    email: str
    password: str


class UserResponse(BaseModel):
    id: str
    username: str
    email: str


users_db: Dict[str, Dict[str, Any]] = {}


@app.post("/users/", response_model=UserResponse)
async def create_user(user: UserRequest) -> UserResponse:
    if user.email in users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user_id = str(len(users_db) + 1)
    users_db[user_id] = {
        "id": user_id,
        "username": user.username,
        "email": user.email,
        "password": user.password  # In a real app, this would be hashed
    }
    
    return UserResponse(**users_db[user_id])


@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: str) -> UserResponse:
    if user_id not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return UserResponse(**users_db[user_id])


def main() -> None:
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run(app, host="0.0.0.0", port=port)


if __name__ == "__main__":
    main()