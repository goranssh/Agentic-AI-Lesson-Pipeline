from fastapi import FastAPI, HTTPException
from typing import List
from models import Lesson

app = FastAPI(title="Lesson Pipeline API")

# In-memory "database"
lessons_db: List[Lesson] = []

@app.get("/")
def read_root():
    return {"message": "Welcome to the Lesson Pipeline API 🚀"}

@app.get("/lessons", response_model=List[Lesson])
def get_lessons():
    return lessons_db

@app.post("/lessons", response_model=Lesson)
def create_lesson(lesson: Lesson):
    # Check if lesson with same ID exists
    for l in lessons_db:
        if l.id == lesson.id:
            raise HTTPException(status_code=400, detail="Lesson with this ID already exists.")
    lessons_db.append(lesson)
    return lesson

@app.get("/lessons/{lesson_id}", response_model=Lesson)
def get_lesson(lesson_id: int):
    for lesson in lessons_db:
        if lesson.id == lesson_id:
            return lesson
    raise HTTPException(status_code=404, detail="Lesson not found")

@app.put("/lessons/{lesson_id}", response_model=Lesson)
def update_lesson(lesson_id: int, updated_lesson: Lesson):
    for idx, lesson in enumerate(lessons_db):
        if lesson.id == lesson_id:
            lessons_db[idx] = updated_lesson
            return updated_lesson
    raise HTTPException(status_code=404, detail="Lesson not found")

@app.delete("/lessons/{lesson_id}")
def delete_lesson(lesson_id: int):
    for idx, lesson in enumerate(lessons_db):
        if lesson.id == lesson_id:
            lessons_db.pop(idx)
            return {"message": "Lesson deleted"}
    raise HTTPException(status_code=404, detail="Lesson not found")
