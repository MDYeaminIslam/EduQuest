import { z } from 'zod'; // 1. Import `z` from 'zod'.
import { Button } from '@/components/ui/button'; //
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod'; //
import { useForm } from 'react-hook-form';
import { SignupValidation } from '@/lib/validation';
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
import { useCreateUserAccount, useSignInAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';



const SignupForm = () => {
  const { toast } = useToast(); //this is for toast message
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate(); 

  // here we are using react-query for creating a new user account
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount} = useCreateUserAccount(); //this is a hook for creating a new user account

  //
  const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccount();

  // 1. Create a schema for your form's validation.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    //create a new user
    const newUser = await createUserAccount(values); //getting this functionality form api.ts file

    //if user is not created then exit from this function
    if(!newUser){
      return toast({ title: "Sign up failed. Please try again."});
    }

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
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use EduQuest, please enter your details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            isCreatingAccount ? (
              <div className='flex-center gap-2'>
                <Loader/>  Loading...
              </div>
            ):"Sign Up"
          }</Button>
          
          <p className='text-small-regular text-light-2 text-center mt-2'>Already have a account?
          <Link to="/sign-in" className='text-primary-500 text-small-semibold ml-1'>Log in</Link></p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
