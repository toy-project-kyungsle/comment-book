import React, { useEffect, useState } from 'react';
import { Container, Controller, Slides, SlidesViewer } from './styles';
import axios from 'axios';
import useInput from '@hooks/useinput';
import HotNewBookImg from '@components/HotNewBookImg';

function HotNewBooksSlider() {
  const [trans, setTrans] = useState(0);
  const [hotbooks, setHotbooks] = useInput([]);
  const [loading, setLoading] = useInput(false);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 340);
  };

  const onClickR = () => {
    if (trans <= -4080) {
      return;
    }
    setTrans((current) => current - 340);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3085/hotbooks`)
      .then((res) => {
        setHotbooks(res.data.items);
        // console.log(res.data.items);
        // console.log(hotbooks[0]);
        setLoading(false);
      })
      .catch((error) => console.dir(error));
  }, [setLoading, setHotbooks]);

  return (
    <>
      {loading || !hotbooks ? (
        <div>Loading..</div>
      ) : (
        <Container>
          <SlidesViewer>
            <Slides style={{ transform: `translateX(${trans}px)` }}>
              {hotbooks?.map((book) => {
                return (
                  <HotNewBookImg key={book.id} title={book.title} coverImg={book.coverLargeUrl} isbn={book.isbn} />
                );
              })}
            </Slides>
          </SlidesViewer>
          <Controller>
            <button className="Left" onClick={onClickL}>{`<`}</button>
            <button className="Right" onClick={onClickR}>
              {'>'}
            </button>
          </Controller>
        </Container>
      )}
    </>
  );
}

export default HotNewBooksSlider;
