import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/MybooksSlider';
import MyInfo from '@components/organisms/MyInfo';
import Footer from '@components/organisms/Footer';
import Auth from '@components/organisms/Auth';
import Loading from '@components/organisms/Loading';
import MainSearch from '@components/organisms/MainSearch';
import { connect } from 'react-redux';
import { reduxState } from '@utils/types';

function MainPage({ showLoginModal }) {
  const [loadNum, setLoadNum] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadNum === 2) {
      setLoading(false);
    }
  }, [loadNum]);

  return (
    <div>
      {showLoginModal ? <Auth showLoginModal={showLoginModal} /> : null}
      <Loading loading={loading} />
      <MyInfo loading={loading} setLoadNum={setLoadNum} />
      <MainSearch />
      <MybooksSlider loading={loading} setLoadNum={setLoadNum} />
      <Footer loading={loading} />
    </div>
  );
}

function mapStateToProps(state: reduxState) {
  return { showLoginModal: state['showLoginModal'] };
}

export default connect(mapStateToProps)(MainPage);
