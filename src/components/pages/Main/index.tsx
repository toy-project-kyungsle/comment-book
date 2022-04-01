import React, { useEffect, useState } from 'react';
import MybooksSlider from '@components/organisms/Main/Slider';
import MyInfo from '@components/organisms/Main/Information';
import Footer from '@components/organisms/Main/Footer';
import Auth from '@components/organisms/Others/Auth';
import Loading from '@components/organisms/Others/Loading';
import MainSearch from '@components/organisms/Main/Search';
import { connect } from 'react-redux';
import { reduxState } from '@utils/objects/types';

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
      {showLoginModal ? <Auth /> : null}
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
