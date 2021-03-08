import { connectToDatabase } from "../util/mongodb";

const SamsComponent = ({ test_sandbox2 }) => {
  const samConst = `Sam's First Attempt to Get MERN`;

  return (
    <>
      <h1>{samConst}</h1>
      <ul>
        {test_sandbox2.map((book, index) => (
          <li key={index}>
            <p>{book.title}</p>
            <p>{book.year}</p>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const test_sandbox = await db
    .collection("test_sandbox")
    .find({})
    .limit(20)
    .toArray();
  return {
    props: {
      test_sandbox2: JSON.parse(JSON.stringify(test_sandbox)),
    },
  };
}

export default SamsComponent;