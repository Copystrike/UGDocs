import { Documents } from "@/components/Documents";
import type { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const googleScriptENV = process.env.GOOGLE_SCRIPT_URL;

  if (!googleScriptENV)
    return res.status(500).json({
      code: 500,
      message: "Please set the `GOOGLE_SCRIPT_URL` environment variable.",
    });

  const response = await axios.get(googleScriptENV);

  res.status(200).json({
    code: 200,
    message: "Success, document has been created.",
    documentId: response.data.documentId,
  });
}
