import React, { useState } from 'react';
import "./Filter.css";

const Filter = ({ data }) => {
  const [filter, setFilter] = useState('');

  const filteredData = data ? data.filter((office) =>
    office.Name.toLowerCase().includes(filter.toLowerCase())
  ) : [];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input type="text" id='input' value={filter} onChange={handleChange} />
      {filteredData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Post office name</th>
              <th>Pincode</th>
              <th>District</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((office) => (
              <tr key={office.Name}>
                <td>{office.Name}</td>
                <td>{office.Pincode}</td>
                <td>{office.District}</td>
                <td>{office.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : 
      (
        <p className='error'>Couldn’t find the postal data you’re looking for...</p>
      )
      }
    </div>
  );
};

export default Filter;
