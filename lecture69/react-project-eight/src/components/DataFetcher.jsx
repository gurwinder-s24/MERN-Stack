import {useState, useEffect, use} from 'react'

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
