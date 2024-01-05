import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
  Money_management,
} from "@/_root/pages";
import Suggestion from './_root/pages/Suggestion';



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
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/suggestion" element={<Suggestion/>} />
          <Route path="/money_management" element={<Money_management/>}/>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />

        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};
export default App;
