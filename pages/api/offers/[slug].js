import { offers } from "./data.json";

export default function handler(req, res) {
  const pet=offers.filter(pet=>pet.slug===req.query.slug)
  if (req.method === "GET") {
    res.status(200).json(pet);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Methode ${req.method} is not allowed`,
    });
  }
}
