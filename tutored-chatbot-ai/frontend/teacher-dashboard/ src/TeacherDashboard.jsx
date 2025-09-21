import React, { useState } from "react";

export default function TeacherDashboard() {
  const [loading, setLoading] = useState(false);
  const [lesson, setLesson] = useState(null);

  // <-- REPLACE THIS FUNCTION -->
  const generateLesson = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/lesson"); // FastAPI GET endpoint
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setLesson({
        title: data.title,
        activities: data.activities,
        extensions: data.extensions,
      });
    } catch (err) {
      console.error(err);
      alert("Failed to fetch lesson from the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Teacher Dashboard</h1>
      <button
        onClick={generateLesson} // <-- button calls this function
        style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer" }}
      >
        Generate Lesson Plan
      </button>

      {loading && <p>Agent is creating the lesson plan...</p>}

      {lesson && (
        <div style={{ marginTop: "2rem" }}>
          <h2>{lesson.title}</h2>
          <h3>Activities:</h3>
          <ul>
            {lesson.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
          <h3>Extensions:</h3>
          <ul>
            {lesson.extensions.map((ext, i) => (
              <li key={i}>{ext}</li>
            ))}
          </ul>
          <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
}
