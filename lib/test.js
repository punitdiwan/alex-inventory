import {
  Account,
  AppwriteException,
  Client,
  Databases,
  Query,
  ID,
  Graphql,
  users,
  Functions

} from "appwrite"

import constants from "./constants";


import MD5 from "crypto-js/md5";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Constants from "./constants"
const client = new Client()
  .setEndpoint(Constants.BACKEND_URL)
  .setProject(Constants.PROJECT_ID);

const graphql = new Graphql(client)

const account = new Account(client);
const databases = new Databases(client);
const functions = new Functions(client);

export const getUserData = async () => {
  try {
    const session = await account.getSession('current');
    return session;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const updateUserInfoName = async (userId, name) => {
  try {
    const UpdateName = await account.updateName(name);
    console.log(UpdateName)
    return UpdateName
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfoEmail = async (userId, email) => {
  try {
    const UpdateEmail = await account.updateEmail(email, 'password');
    console.log(UpdateEmail)
    return UpdateEmail
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfoPhone = async (userId, phone) => {
  try {
    const UpdatePhone = await account.updatePhone(phone, 'password');
    console.log(UpdatePhone)
    return UpdatePhone
  } catch (error) {
    console.log(error);
  }
};


export const updateUserInfo = async (userId, data) => {
  try {
    const response = await users.update(userId, data);
    console.log(response);
    // Optionally, you can return the updated user data if needed
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update user data.');
  }
};


export const updateAddress = async (role, address) => {
  try {
    const response = await account.updatePrefs({
      role: role,
      address: address
    })
    // console.log(response);
    // Optionally, you can return the updated user data if needed
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update user data.');
  }
};


export const getData = async (databaseId, collectionId, query = []) => {
  try {
    const response = await databases.listDocuments(databaseId, "649006510a8f6ccbcaed", [Query.select([query])]);
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}



export const getMyCars = async (databaseId, collectionId, userId) => {
  try {
    let response = await databases.listDocuments(databaseId, collectionId,
      [
        Query.equal('user_id', [userId]),
      ]);
    // console.log("Response from getMyCars :  " + JSON.stringify(response) )
    return response
  } catch (error) {
    console.log(error);
  }
}

export const deleteCars = async (databaseId, collectionId, documentId) => {
  try {
    const response = await databases.deleteDocument(databaseId, collectionId, documentId);
    console.log(response);
    return response

  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const me = async () => {
  try {
    const userData = await account.get();
    // console.log(userData);
    return userData;
  } catch (e) {
    if (e instanceof AppwriteException) {
      console.log(e.message);
      return JSON.stringify({
        code: e.code,
        error: e.message
      })
    }
  }
}



export const getBookingData = async (databaseId, collectionId, user_id, status = []) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId,
      [
        Query.equal('user_id', [user_id]),
        Query.equal('status', status)
      ]);
    //  console.log(JSON.stringify(response))
    return response;
  } catch (error) {
    console.log(error);
  }
}


export const getVoucher = async () => {
  let todayDate = new Date().valueOf() / 1000;


  try {
    let response = await databases.listDocuments(constants.DATABASE_ID, constants.COLL_DISCOUNTS,
      [Query.lessThan('expiredOn', parseInt(todayDate))]
    );

    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
  }
}


export const deleteBooking = async (databaseId, collectionId, documentId) => {
  try {
    const response = await databases.deleteDocument(databaseId, collectionId, documentId);
    console.log(response);
    return response

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const loginWithEmail = async (email) => {
  try {
    return account.createEmailSession(email, "password")
  } catch (error) {
    if (error instanceof AppwriteException) {
      console.log(e.message);
      return JSON.stringify({
        code: e.code,
        error: e.message
      })
    }
  }
}

export const createJWT = async () => {
  try {
    return await account.createJWT()
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const logout = async () => {
  try {
    await account.deleteSession('current')
    //await AsyncStorage.clear();
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }

}

export function getDocGQL() {
  const query = {
    query: `query GetBookings {
    databasesListDocuments(
      databaseId: "64900092904d8c615a96",
      collectionId: "64900e33e090e3f48b2d"
  ) {
    total
    documents {
      data  
    }
  }
}`
  }
  graphql.query(query)
    .then((response) => {
      console.log(response)
    })
}

export const register = async (name, email, password, mobile) => {
  console.log(name, email);
  try {
    const userCreation = await account.create('unique()', email, "password", name)
    const fun_payload = JSON.stringify({ email: email });
    const fnResponse = await functions.createExecution(Constants.FUNC_ADD_TO_CUSTOMER_TEAM, fun_payload);
    console.log(fnResponse);
     await account.createEmailSession(email, "password");
     await account.updatePhone(mobile, "password");
    // await account.updatePrefs({ "role": "Customer" });
     await account.deleteSession('current');

    const resTxt = JSON.stringify(userCreation)
    return resTxt;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}


export const login_phone = async (mobile) => {

  try {
    const phoneSession = await account.createPhoneSession('unique()', mobile);
    const resTxt = JSON.stringify(phoneSession);
    return resTxt;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const confirm_phone_otp = async (userId, secret) => {
  try {
    const phone_session_resp = await account.updatePhoneSession(userId, secret);
    const resTxt = JSON.stringify(phone_session_resp);
    console.log(resTxt)
    return resTxt;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const saveCars = async (cars, userId) => {
  try {
    const response = await databases.createDocument(Constants.DATABASE_ID, Constants.COLL_CAR_INFO, 'unique()',
      {
        cars: cars,
        user_id: userId
      });
    const resTxt = JSON.stringify(response);
    // console.log(resTxt)
    return resTxt;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const createBooking = async (documentId, bdata) => {
  try {
    const response = await databases.createDocument(constants.DATABASE_ID, constants.COLL_BOOKING, documentId, bdata);
    // const resTxt = JSON.stringify(response);
    // console.log("createBooking", resTxt)
    return response;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}
export const createBookingDetails = async (documentId, data) => {
  try {
    await databases.createDocument(constants.DATABASE_ID, constants.COLL_BOOKING_DETAILS, documentId, data);
    // const resTxt = JSON.stringify(response);
    // console.log("createBookingDetails", resTxt)
    return response;
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message)
  }
}

export const getCatagory = async (databaseId, collectionId,) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId);
    // console.log(response);
    return response

  } catch (error) {
    console.log(error);
  }
}

export const getService = async (databaseId, collectionId,) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId);
    // console.log(response);
    return response

  } catch (error) {
    console.log(error);
  }
}


export const getBooking = async (userId) => {
  try {
    let response = await databases.listDocuments(constants.DATABASE_ID, constants.COLL_BOOKING,
      [
        Query.equal('user_id', [userId]),
      ]);
    // console.log("Response from getMyBooking :  " + JSON.stringify(response) )
    return response
  } catch (error) {
    console.log(error);
  }
}



