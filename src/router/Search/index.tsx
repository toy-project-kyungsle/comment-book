import React, { useCallback, useEffect, useState } from 'react';
import { Empty, Next, Header } from './styles';
import { useParams } from 'react-router';
import axios from 'axios';
import SearchRender from '@components/SearchRender';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '@components/organisms/Loading';
import { IbookData } from '@utils/types';

function Search() {
  const { search, display } = useParams();
  const [books, setBooks] = useState<IbookData[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [lstNum, setLstNum] = useState(1);
  const navigate = useNavigate();
  const viewCount = [0, 1, 2, 3];

  const onClickOutBtn = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onClickNextBtn = useCallback(() => {
    setLstNum((prev) => prev + 1);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.interbookserver.kro.kr:3085/search/${search}/${display}/${lstNum}`).then((res) => {
      setBooks(res.data.items);
      setLoading(false);
    });
  }, [display, lstNum, search, setBooks, setLoading]);

  return (
    <>
      <Loading loading={loading} />
      {loading ? null : (
        <>
          <Header>
            <div className="topment">
              <div className="topbtn">
                <button onClick={onClickOutBtn}>
                  <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '25px', color: '#D7DBDD' }} />
                </button>
              </div>
              <div>
                <span className="underlined">Click Picture</span>
                <span> you wanna comment</span>
              </div>
            </div>
          </Header>
          {viewCount.map((e) => {
            if (books.length >= e + 1) {
              return (
                <div key={e}>
                  <SearchRender book={books[e]} viewNum={e + 1} EndNum={books.length}>
                    <Next data-Left={e / 2 === 0 ? '750px' : '0'}>
                      <div className="clickDiv" onClick={onClickNextBtn}>
                        <span>next</span>
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '15px' }} />
                      </div>
                    </Next>
                  </SearchRender>
                </div>
              );
            } else return null;
          })}
          {books.lenght === 0 ? <Empty>Noting Else...</Empty> : null}
          <div style={{ height: '200px' }}></div>
        </>
      )}
    </>
  );
}

export default Search;
