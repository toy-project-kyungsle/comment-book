import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Footer from '@components/Footer';
import { authService } from '@utils/fbase';
import Auth from '@components/Auth';

function MainPage() {
  const [loadNum, setLoadNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (loadNum === 2) {
      setLoading(false);
    }
  }, [loadNum]);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
  }, []);

  console.log(loadNum);

  return (
    <>
      {showLoginModal ? <Auth showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} /> : null}
      <MyInfo
        loading={loading}
        setLoadNum={setLoadNum}
        isLoggedin={isLoggedin}
        setIsLoggedin={setIsLoggedin}
        setShowLoginModal={setShowLoginModal}
      />
      <MybooksSlider loading={loading} setLoadNum={setLoadNum} isLoggedin={isLoggedin} />
      <Footer />
    </>
  );
}

export default MainPage;
