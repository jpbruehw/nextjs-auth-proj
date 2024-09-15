import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Sign In
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Sign Out
        </Button>
      </form>

      {/* display if user is signed in or not */}
      {session?.user ? <div>Signed In</div> : <div> Signed Out</div>}

      <Profile />
    </div>
  );
}
