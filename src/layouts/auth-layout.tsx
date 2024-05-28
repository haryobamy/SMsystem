import { DASHBOARD } from '@/constants';
import { useIsAuth } from '@/hooks/auth';
import { lazy } from 'react';

import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';

const Login = lazy(() => import('@/components/auth/Login'));
const ForgotPassword = lazy(() => import('@/components/auth/forgot-password'));
const ResetPassword = lazy(() => import('@/components/auth/reset-password'));

function Authlayout() {
  const isAuth = useIsAuth();
  const [searchParams] = useSearchParams();

  if (!isAuth) {
    return <Navigate to={searchParams.get('returnUrl') ?? DASHBOARD} />;
  }

  return (
    <div className="flex flex-col min-h-[100vh] bg-white relative pb-[6rem]">
      <div className="w-full  flex justify-start py-[1.5rem] px-4 md:px-[6.25rem] border-b-1 border-b-solid border-b-[#E9E5E5] fixed top-0 bg-white z  ">
        <img
          src="assests/logo.svg"
          alt=""
          className="max-h-[2.5rem] md:max-h-[3.22rem]"
        />
      </div>
      <div className="flex flex-1 w-full px-4 md:px-[6.25rem] mt-[7.5rem] md:mt-[10.25rem]">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Authlayout;
