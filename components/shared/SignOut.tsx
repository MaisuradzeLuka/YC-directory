import { signOut } from "@/auth";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className=" text-red-500">
        Signout
      </button>
    </form>
  );
};

export default SignIn;
