import React, { useState, useEffect } from 'react';
import './4-fetch-data.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="data-fetcher">
      <h2 className="title">Posts</h2>
      <ul className="post-list">
        {data.map((post) => (
          <li key={post.id} className="post">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
