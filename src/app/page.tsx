import { connectMongoDB } from '@/config/db-config';
import { GetCurrentUserFromMongoDB } from '@/server-actions/users';

const Home = async () => {
  await connectMongoDB();
  const user = await GetCurrentUserFromMongoDB()
  return (
    <>
      <h1>{user?.name || ''}</h1>
      <h1>{user?.username || ''}</h1>
      <h1>{user.email}</h1>
    </>
  );
}
export default Home
