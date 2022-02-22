import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Footer from '@components/Footer';
import Auth from '@components/Auth';
import Loading from '@components/Loading';

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
    <div className="test">
      {showLoginModal ? <Auth showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} /> : null}
      <Loading loading={loading} />
      <MyInfo loading={loading} setLoadNum={setLoadNum} setShowLoginModal={setShowLoginModal} />
      <MybooksSlider loading={loading} setLoadNum={setLoadNum} />
      <Footer loading={loading} />
    </div>
  );
}

export default MainPage;
