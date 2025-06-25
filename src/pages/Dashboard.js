import React from "react";
import { Link } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";

const Dashboard = () => {
  const { questions, loading } = useQuestions();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Questions</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.ID}>
            <Link to={`/problem/${q.ID}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
