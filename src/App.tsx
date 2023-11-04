import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* This routes for public people*/}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>} />
          <Route path="/sign-up" element={<SignupForm/>} />
        </Route>

        {/* This routes for private people. Here index means starting page*/}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};
{/* Start to see the video from 24 minutes*/}
export default App;
