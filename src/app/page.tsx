import { currentUser } from '@clerk/nextjs/server';

const Home = async () => {
  const user = await currentUser()
  let email = "";
  if (user?.emailAddresses) {
    email = user?.emailAddresses[0]?.emailAddress || "";
  }
  return (
    <>
      <h1>{user?.fullName || ''}</h1>
      <h1>{user?.username || ''}</h1>
      <h1>{email}</h1>
    </>
  );
}
export default Home
