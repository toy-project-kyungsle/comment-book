import Anchor from '@components/atoms/Anchor';
import React from 'react';
import { BackGround, Wrapper, Mysns } from './styles';
import SpanBox from '@components/molecules/SpanBox';

interface Props {
  loading: boolean;
}

function Footer({ loading }: Props) {
  const AnchorArr = [
    ['https://github.com/keinn51', 'GitHub'],
    ['https://basemenks.tistory.com/', 'Blog'],
    ['https://www.instagram.com/keinn51/', 'Insta'],
    ['https://www.facebook.com/sooks447/', 'FaceBook'],
  ];
  const WarnArr = [
    'All designs and animations were made by the author himself.',
    'So unauthorized distribution is prohibited.',
  ];

  return loading ? null : (
    <BackGround>
      <Wrapper>
        <SpanBox className="Footer" textArr={WarnArr} />
        <Mysns>
          <div>
            {AnchorArr.map((a) => (
              <Anchor className="FooterSNS" href={a[0]} target="_blank" rel="noreferrer" key={a[0]}>
                {a[1]}
              </Anchor>
            ))}
          </div>
        </Mysns>
        <SpanBox className="Footer" textArr={['@ 2022 BookComment from Kyungsle']} />
      </Wrapper>
    </BackGround>
  );
}

export default Footer;
