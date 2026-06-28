from fastapi import FastAPI, HTTPException, Depends, Query
from typing import List, Annotated
from app.database import get_db
from sqlalchemy.orm import Session

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Backend is running"}


@app.get("/c/{chat_id}")
async def get_chat(chat_id: str):
    return {"chat_id": chat_id, "message": "Retrieved message"}


db_dependency = Annotated[Session, Depends(get_db)]