import {useCallback, useEffect, useState} from 'react';

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;max-age=0'
  }
}

export const useParentElementDimensions = () => {
  const isClient = typeof window === 'object';
  const getWindowDimensions = useCallback(() => {
    return {
      width: isClient ? window?.parentElement.clientWidth : 0,
      height: isClient ? window?.parentElement.clientHeight : 0
    };
  }, [isClient]);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getWindowDimensions]);
  return windowDimensions;
};

