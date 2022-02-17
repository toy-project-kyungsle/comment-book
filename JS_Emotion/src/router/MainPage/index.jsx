import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/MyInfo';
import Footer from '@components/Footer';

function MainPage() {
  const [loadNum, setLoadNum] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadNum === 2) {
      setLoading(false);
    }
  }, [loadNum]);

  return (
    <>
      <MyInfo loading={loading} setLoadNum={setLoadNum} />
      <MybooksSlider loading={loading} setLoadNum={setLoadNum} />
      <Footer />
    </>
  );
}

export default MainPage;
