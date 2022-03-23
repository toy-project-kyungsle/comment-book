import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import useInput from '@hooks/useinput';
import useSearchSubmit from '@hooks/useNavi';
import React from 'react';
import { ButtonImg, Sform } from './styles';

interface Props {
  className: string;
  InputName?: string;
  InputType?: string;
  InputPlaceHolder?: string;
  isRequired?: boolean;
}

function SearchAuthForm(props: Props) {
  const {
    className,
    InputName = 'search',
    InputType = 'text',
    InputPlaceHolder = 'Search',
    isRequired = false,
  } = props;
  const [search, , onChangeSearch] = useInput('');
  const onSubmit = useSearchSubmit(`/search/${search}/4`);

  return (
    <Sform onSubmit={onSubmit} data-mode={className}>
      <Input
        className={className}
        name={InputName}
        type={InputType}
        placeholder={InputPlaceHolder}
        value={search}
        onChange={onChangeSearch}
        isRequired={isRequired}
      ></Input>
      <Button className={className}>{ButtonImg(className)}</Button>
    </Sform>
  );
}

export default SearchAuthForm;
