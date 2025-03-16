import { WrapperPropsType } from '@/utils/types/wrapper.type';
import '@/providers/i18n'; 

const LocalizeProvider = ({ children }: WrapperPropsType) => {
  return children;
};

export default LocalizeProvider;
