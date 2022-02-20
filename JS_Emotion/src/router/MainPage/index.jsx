import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Footer from '@components/Footer';
import Auth from '@components/Auth';
import { Loading } from './styles';

function MainPage() {
  const [loadNum, setLoadNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (loadNum === 2) {
      setLoading(false);
    }
  }, [loadNum]);

  // console.log(loadNum);

  return (
    <>
      {showLoginModal ? <Auth showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} /> : null}
      <Loading mode={loading ? 'doing' : 'done'}>
        <div className="container">
          <span>Book Comment</span>
          <div className="loadContainer">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Loading>
      <MyInfo loading={loading} setLoadNum={setLoadNum} setShowLoginModal={setShowLoginModal} />
      <MybooksSlider loading={loading} setLoadNum={setLoadNum} />
      <Footer loading={loading} />
    </>
  );
}

export default MainPage;
