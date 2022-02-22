import React, { useCallback, useEffect, useState } from 'react';
import { Container, Empty, Next, Header } from './styles';
import { useParams } from 'react-router';
import axios from 'axios';
import useInput from '@hooks/useinput';
import SearchRender from '@components/SearchRender';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '@components/Loading';

function Search() {
  const { search, display } = useParams();
  const [books, setBooks] = useInput([]);
  const [loading, setLoading] = useInput(false);
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
      // console.log(res.data.items);
      setLoading(false);
    });
  }, [display, lstNum, search, setBooks, setLoading]);

  return (
    <>
      <Loading loading={loading} />
      <Header>
        <div className="topment" align="center">
          <div className="topbtn">
            <button onClick={onClickOutBtn}>
              <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '25px', color: '#D7DBDD' }} />
            </button>
          </div>
          Click Picture you wanna comment
        </div>
      </Header>
      {viewCount.map((e) => {
        if (books.length >= e + 1) {
          return (
            <div>
              <SearchRender book={books[e]} viewNum={e + 1} EndNum={books.length}>
                <Next Left={e / 2 === 0 ? '750px' : '0'}>
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
  );
}

export default Search;
