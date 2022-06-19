import { offers } from "./data.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(offers);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Methode ${req.method} is not allowed`,
    });
  }
}
