import { z } from 'zod'; // 1. Import `z` from 'zod'.
import { Button } from '@/components/ui/button'; //
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod'; //
import { useForm } from 'react-hook-form';
import { SigninValidation} from '@/lib/validation'; //we only need singInValidation here.
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,     
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Loader from '@/components/shared/Loader';
import { useSignInAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';



const SigninForm = () => {
  const { toast } = useToast(); //this is for toast message
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate(); 

  //
  const { mutateAsync: signInAccount} = useSignInAccount();

  // 1. Create a schema for your form's validation.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    
    //Getting the session from the form 
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    //if session is not created then exit from this function showing a toast message
    if(!session){ 
      return toast({ title: "Sign in failed. Please try again."});
    }

    // const session = await signInAccount()

    const isLoggedIn = await checkAuthUser(); //check if the user is logged in or not
    if(isLoggedIn){
      form.reset(); //reset the form

      navigate('/'); //navigate to the home page
    }else{
      return toast({ title: "Sign up failed. Please try again."});
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/EduQuest_Logo.png" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Welcome back! Please enter your account details here.
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='shad-button_primary'>{
            isUserLoading ? (
              <div className='flex-center gap-2'>
                <Loader/>  Loading...
              </div>
            ):"Sign in"
          }</Button>
          
          <p className='text-small-regular text-light-2 text-center mt-2'>Don't have an account?
          <Link to="/sign-up" className='text-primary-100 hover:text-green-300 text-small-semibold ml-1'>Sign up</Link></p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
