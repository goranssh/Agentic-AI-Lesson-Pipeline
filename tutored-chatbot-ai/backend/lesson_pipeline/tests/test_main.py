from fastapi.testclient import TestClient
from lesson_pipeline.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "Welcome to the Lesson Pipeline API" in response.json()["message"]

def test_create_and_get_lesson():
    lesson_data = {
        "id": 1,
        "title": "Introduction to Robotics",
        "description": "Basics of robotics",
        "topics": ["circuits", "sensors"]
    }
    create_resp = client.post("/lessons", json=lesson_data)
    assert create_resp.status_code == 200

    get_resp = client.get("/lessons/1")
    assert get_resp.status_code == 200
    assert get_resp.json()["title"] == "Introduction to Robotics"
