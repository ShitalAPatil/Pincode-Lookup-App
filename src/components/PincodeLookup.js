import React, { useState } from 'react';
import "./PincodeLookup.css";

const PincodeLookup = () => {
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pincode.length !== 6) {
      setError('Please enter a 6-digit pincode');
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((responseData) => {
        setLoading(false);
        if (responseData[0].Status === 'Error') {
          setError(responseData[0].Message);
        } else {
          setData(responseData[0].PostOffice);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='label' >Enter Pincode :
        <br></br>
        <input type="text" value={pincode} placeholder="Pincode"  onChange={handleChange} />
        
         <button type="submit">Lookup</button>
         </label>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data.length > 0 && (
        <div>
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
              {data.map((office) => (
                <tr key={office.Name}>
                  <td>{office.Name}</td>
                  <td>{office.Pincode}</td>
                  <td>{office.District}</td>
                  <td>{office.State}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PincodeLookup;
