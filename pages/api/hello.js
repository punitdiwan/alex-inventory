// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { loginWithEmail } from "../../lib/appwrite";




export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const loginResponse = await loginWithEmail(username, password)
      res.json(loginResponse)

      // res.status(200).json({username, password})
    } catch (error) {
      res.json(error)
    }

  } else {
    // Handle any other HTTP method
  }
}