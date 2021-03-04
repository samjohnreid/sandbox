import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const test_sandbox = await db
    .collection("test_sandbox")
    .find({})
    .toArray();

  res.json(test_sandbox);
};