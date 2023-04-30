import { useEffect, useState } from 'react';

function useMobile(): boolean {
  const [mobile, setMobile] = useState(false);

  const mobileHandler = () => {
    setMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    mobileHandler();
    window.addEventListener('resize', () => {
      mobileHandler();
    });
    return () => {
      window.removeEventListener('resize', mobileHandler);
    };
  }, []);

  useEffect(() => {
    mobileHandler;
  }, [mobile]);

  return mobile;
}

export default useMobile;
