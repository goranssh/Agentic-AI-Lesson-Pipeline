from pydantic import BaseModel
from typing import List, Optional

class Lesson(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    topics: List[str] = []
