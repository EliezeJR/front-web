import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Generos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/generos")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <div className="container">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Genero</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
  
}

export default Generos