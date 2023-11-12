import { ID, Query } from "appwrite"; //this helps to get id for the user
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";


export async function createUserAccount(user: INewUser){
  try {
    //getting account details from config.ts file and there we have created a object of account using client referance.
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if(!newAccount) throw Error; //if account is not created then throw error

    const avatarUrl = avatars.getInitials(user.name); //this will create avatar for the user

    //this will save user to database
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,//we don't have username in account so we are using it from user
      imageUrl: avatarUrl,
    });
    


    return newUser;

  } catch (error) {
    console.log(error);
    return error;
    
  }
}


//this will save user to database so we can access it later
//here we will actually save user to database using appwrite
export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;//"?" means optional here
}){
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId, //which database we want to save user
      appwriteConfig.userCollectionId,//which collection we want to save user
      ID.unique(), //unique id for user
      user,//user object
    )
    return newUser;
  } catch (error) {
    console.log(error)
  }
}

export async function signInAccount(user : { email: string; password: string;}){
  try {
    //Creating a session for the user 
    const session = await account.createEmailSession(user.email, user.password);
    return session;
    
  } catch (error) {
    console.log(error);
  }
}

//this will get user from database
export async function getCurrentUser(){
  try {
    const currentAccount = await account.get(); //this will get current user from appwrite

    if(!currentAccount) throw Error; //if user is not found then throw error
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]

    );//this will get user from database

    if(!currentUser) throw Error; //if user is not found then throw error;
    return currentUser.documents[0]; //This line returns the first document from the documents array within the currentUser object.
  } catch (error) {
    console.log(error);
  }
}