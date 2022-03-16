import Anchor from '@components/atoms/Anchor';
import Card from '@components/atoms/Card';
import Paragraph from '@components/atoms/Paragraph';
import React from 'react';
import { Wrapper, Box, Mysns } from './styles';

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

  return loading ? null : (
    <Wrapper>
      <Box>
        <Card margin="15px 0">
          <Paragraph className="Footer">All designs and animations were made by the author himself.</Paragraph>
          <Paragraph className="Footer">So unauthorized distribution is prohibited.</Paragraph>
        </Card>
        <Mysns>
          <div>
            {AnchorArr.map((a) => (
              <Anchor href={a[0]} target="_blank" rel="noreferrer">
                {a[1]}
              </Anchor>
            ))}
          </div>
        </Mysns>
        <Card margin="15px 0">
          <Paragraph className="Footer">@ 2022 BookComment from Kyungsle</Paragraph>
        </Card>
      </Box>
    </Wrapper>
  );
}

export default Footer;
