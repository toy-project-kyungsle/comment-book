import React from 'react';
import { Empty, Next, Header } from './styles';
import { useParams } from 'react-router';
import SearchRender from '@components/organisms/Search/BookBoxes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '@components/organisms/Others/Loading';
import useSearch from '@hooks/notReUsable/useSearch';
import SpanBox from '@components/molecules/SpanBox';
import Button from '@components/atoms/Button';

function Search() {
  const { search, display } = useParams();
  const [books, loading, onClickOutBtn, onClickNextBtn] = useSearch({ search, display });
  const viewCount = [0, 1, 2, 3];
  const [TopTextArr, TopClassArr] = [['Click Picture', ' you wanna comment'], ['SearchFirst']];
  const [NextTextArr, NextClassArr] = [['next'], ['SearchClickDivFirst']];

  return (
    <>
      <Loading loading={loading} />
      {!loading && (
        <>
          <Header>
            <SpanBox className="Search" classNameArr={TopClassArr} textArr={TopTextArr}>
              <Button className="Search" onClick={onClickOutBtn}>
                <FontAwesomeIcon icon={faChevronCircleLeft} style={{ fontSize: '25px', color: '#D7DBDD' }} />
              </Button>
            </SpanBox>
          </Header>
          {viewCount.map((e) => {
            if (books.length >= e + 1) {
              return (
                <div key={e}>
                  <SearchRender book={books[e]} viewNum={e + 1} EndNum={books.length}>
                    <Next data-Left={e / 2 === 0 ? null : '0'} data-Right={e / 2 === 0 ? '0' : null}>
                      <SpanBox
                        className="SearchClickDiv"
                        divOnClick={onClickNextBtn}
                        textArr={NextTextArr}
                        classNameArr={NextClassArr}
                      >
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '15px' }} />
                      </SpanBox>
                    </Next>
                  </SearchRender>
                </div>
              );
            } else return null;
          })}
          {books.length === 0 ? <Empty>Noting Else...</Empty> : null}
          <div style={{ height: '200px' }}></div>
        </>
      )}
    </>
  );
}

export default Search;
