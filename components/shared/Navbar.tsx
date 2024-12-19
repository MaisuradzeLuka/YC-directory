import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { auth } from "@/auth";
import SignOut from "./SignOut";
import SignIn from "./SignIn";

const Navbar = async () => {
  const session = await auth();

  return (
    <header>
      <nav className="flex justify-between items-center bg-white px-16 py-5">
        <Link href="/">
          <Image src={logo} width={144} height={24} alt="main logo" />
        </Link>

        <div className="flex gap-8 font-semibold">
          {session ? (
            <>
              <Link href="/startup/create/">Create</Link>
              <SignOut />
              <Image
                src={`${session?.user?.image || ""}`}
                width={36}
                height={36}
                alt="profile picture"
                className="rounded-full"
              />
            </>
          ) : (
            <>
              <SignIn />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
