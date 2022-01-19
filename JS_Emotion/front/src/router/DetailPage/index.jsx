import useInput from '@hooks/useinput';
import DetailRender from '@render/DetailRender';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function DetailPage() {
  const { isbn } = useParams();
  const [datailBook, setDetailBook] = useInput({});
  const [loading, setLoading] = useInput(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/detailpage/${isbn}`).then((res) => {
      setDetailBook(res.data.items[0]);
      console.log(res.data.items);
      setLoading(false);
    });
  }, [isbn, setDetailBook, setLoading]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <DetailRender
            key={datailBook.isbn}
            title={datailBook.title}
            coverImg={datailBook.coverLargeUrl}
            priceStandard={datailBook.priceStandard}
            priceSales={datailBook.priceSales}
            author={datailBook.author}
            description={datailBook.description}
            link={datailBook.link}
            pubDate={datailBook.pubDate}
          />
        </div>
      )}
      ;
    </div>
  );
}

export default DetailPage;
