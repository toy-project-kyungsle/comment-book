import useInput from '@hooks/useinput';
import axios from 'axios';
import React, { useEffect } from 'react';

function HotBooks() {
  const [hotbooks, setHotbooks] = useInput([]);
  const [loading, setLoading] = useInput(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3085/hotbooks`)
      .then((res) => {
        setHotbooks(res.data.items);
        console.log(res.data.items);
        // console.log(hotbooks[0]);
        setLoading(false);
      })
      .catch((error) => console.dir(error));
  }, [setLoading, setHotbooks]);

  // console.log(hotbooks);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {hotbooks.map((book) => (
            <img src={book.coverSmallUrl} alt={book.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotBooks;
