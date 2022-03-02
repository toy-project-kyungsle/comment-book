import React, { useCallback } from 'react';
import { Background, Container, SearchBar } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useInput from '@hooks/useinput';
import { useNavigate } from 'react-router';

function MainSearch() {
  const [search, , onChangeSearch] = useInput('');
  let navigate = useNavigate();

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') return navigate(`/search/${search}/4`);
    },
    [navigate, search],
  );

  const onClickSearchBtn = useCallback(() => {
    return navigate(`/search/${search}/4`);
  }, [navigate, search]);

  return (
    <Background>
      <Container>
        <div className="search">
          <span>Search Book</span>
        </div>
        <SearchBar>
          <div>
            <input
              type="text"
              placeholder="Free search book you want!"
              value={search}
              onChange={onChangeSearch}
              onKeyDown={onKeyDown}
            ></input>
          </div>
          <div>
            <span>
              <button className="searchBtn">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: `grey`, fontSize: '20px' }}
                  onClick={onClickSearchBtn}
                />
              </button>
            </span>
          </div>
        </SearchBar>
      </Container>
    </Background>
  );
}

export default MainSearch;
