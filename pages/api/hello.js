// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { loginWithEmail } from "../../lib/appwrite";




export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    

  } else {
    // Handle any other HTTP method
  }
}