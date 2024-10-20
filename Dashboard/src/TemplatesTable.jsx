import React, { useEffect, useState } from 'react';

const TemplatesTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/templates.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="templates-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Creator</th>
            <th>Creator Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {data.map(({ID, name, description, creator, creatorType, status}, index) => (
                <tr key={ID}>
                    <td>{ID}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{creator}</td>
                    <td>{creatorType}</td>
                    <td><span className="status">{status}</span></td>
                    <td>
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemplatesTable;
