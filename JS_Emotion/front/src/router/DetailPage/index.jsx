import useInput from '@hooks/useinput';
import DetailRender from '@render/DetailRender';
import getCategoryName from '@utils/GetDetailedName';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function DetailPage() {
  const { isbn } = useParams();
  const [datailBook, setDetailBook] = useInput({});
  const [loading, setLoading] = useInput(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/isbnsearch/${isbn}`).then((res) => {
      setDetailBook(res.data.items[0]);
      // console.log(res.data.items);
      setLoading(false);
    });
  }, [isbn, setDetailBook, setLoading]);

  return (
    <>
      {loading || !datailBook ? (
        <div>Loading</div>
      ) : (
        <DetailRender
          key={datailBook.isbn}
          title={datailBook.title}
          author={datailBook.author}
          genre={getCategoryName(datailBook)}
          coverImg={datailBook.coverLargeUrl}
          priceStandard={datailBook.priceStandard}
          priceSales={datailBook.priceSales}
          description={datailBook.description}
          link={datailBook.link}
          pubDate={datailBook.pubDate}
        />
      )}
    </>
  );
}

export default DetailPage;
