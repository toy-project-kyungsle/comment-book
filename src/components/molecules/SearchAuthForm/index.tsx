import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import useInput from '@hooks/useinput';
import useSearchSubmit from '@hooks/useSearchSubmit';
import React from 'react';
import { ButtonImg, Sform } from './styles';

interface Props {
  formName: string;
  InputType?: string;
  InputPlaceHolder?: string;
  isRequired?: boolean;
}

function SearchAuthForm(props: Props) {
  const { formName, InputType = 'text', InputPlaceHolder = 'Search', isRequired = false } = props;
  const [search, , onChangeSearch] = useInput('');
  const onSubmit = useSearchSubmit(`/search/${search}/4`);

  return (
    <Sform onSubmit={onSubmit} className={formName}>
      <Input
        className={formName === 'Header' && 'Header'}
        type={InputType}
        placeholder={InputPlaceHolder}
        value={search}
        onChange={onChangeSearch}
        isRequired={isRequired}
      ></Input>
      <Button>{ButtonImg()}</Button>
    </Sform>
  );
}

export default SearchAuthForm;
