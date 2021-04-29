import * as yup from 'yup';
import {LocaleJP} from './LocaleJP';

yup.setLocale(LocaleJP);
export const BaseYup = yup;