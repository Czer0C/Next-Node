// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { parseRequest } from "../../lib/helpers";

export default (req, res) => {
  const parsedRequest = parseRequest(req);

  res.status(200).json(parsedRequest);
};
