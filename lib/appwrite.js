import {
  Account,
  AppwriteException,
  Client,
  Databases,
  Query,
  ID,
  Teams,
} from "appwrite";

import Constants from "./constants";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_BACKEND_URL) //BACKEND_URL
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); //PROJECT_ID

const databases = new Databases(client);

const teams = new Teams(client);

export const me = async () => {
  try {
    const account = new Account(client);
    const userData = await account.get();
    // console.log("Existing user : ",userData);
    return userData;
  } catch (e) {
    if (e instanceof AppwriteException) {
      console.log(e.message);
      return JSON.stringify({
        code: e.code,
        error: e.message,
      });
    }
  }
};

export const getTeamMembers = async (teamId) => {
  try {
    const membership = teams.listMemberships(teamId);
    return membership;
  } catch (e) {
    return e;
  }
};

export const getSessionData = async () => {
  try {
    const account = new Account(client);
    const session = await account.getSession("current");
    return session;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const getData = async (databaseId, collectionId) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.orderDesc("$createdAt"),
    ]);
    // throw new Error("Cannot fetch data for now!")
    return response;
  } catch (error) {
    return error.message;
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const account = new Account(client);
    return account.createEmailSession(email, password);
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.log(e.message);
      return JSON.stringify({
        code: e.code,
        error: e.message,
      });
    }
  }
};

export const createJWT = async () => {
  try {
    const account = new Account(client);
    return await account.createJWT();
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const logout = async () => {
  try {
    const account = new Account(client);
    return account.deleteSession("current");
  } catch (error) {
    const appwriteError = error;
    console.log(appwriteError);
    throw new Error(appwriteError.message);
  }
};

export const register = async (email, password) => {
  try {
    const account = new Account(client);
    return account.create("unique()", email, password);
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const getCategory = async (databaseId, collectionId) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId);
    // throw new Error("Cannot fetch data for now!")
    return response;
  } catch (error) {
    return error.message;
  }
};

export const getProducts = async (databaseId, collectionId, query) => {
  console.log(query);
  try {
    const response = await databases.listDocuments(
      databaseId,
      collectionId,
      query
    );
    // throw new Error("Cannot fetch data for now!")
    return response;
  } catch (error) {
    return error.message;
  }
};

export default client;
