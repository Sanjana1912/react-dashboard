import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProblemDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/questions?ID=${id}`).then((res) => {
      setQuestion(res.data[0]);
    });
  }, [id]);

  if (!question) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{question.title}</h2>
      <p style={styles.description}>{question.description}</p>

      <h3 style={{ marginTop: "30px" }}>Test Cases:</h3>
      <ul style={styles.caseList}>
        {question.test_cases.map((test, i) => (
          <li key={i} style={styles.testItem}>
            <div>
              <strong>Input:</strong>
            </div>
            <pre style={styles.codeBlock}>{test}</pre>
            <div>
              <strong>Output:</strong>
            </div>
            <pre style={styles.codeBlock}>{question.output[i]}</pre>
          </li>
        ))}
      </ul>

      <Link to="/" style={styles.backButton}>
        ← Back to Dashboard
      </Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  caseList: {
    listStyleType: "none",
    padding: 0,
  },
  testItem: {
    marginBottom: "30px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
  },
  codeBlock: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "6px",
    whiteSpace: "pre-wrap",
    fontFamily: "monospace",
  },
  backButton: {
    display: "inline-block",
    marginTop: "30px",
    textDecoration: "none",
    color: "#1976d2",
    fontWeight: "bold",
  },
};

export default ProblemDetail;
