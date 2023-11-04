import { Outlet, Navigate } from 'react-router-dom';
//This is for routing in auth layout which include signin and signup
const AuthLayout = () => {
  const isAuthenticated = false;
  
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10 ">
            <Outlet />
          </section>

          <img
            src="/assets/images/EduQuest_home_Image.png"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
