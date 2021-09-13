import { signOut } from "next-auth/client";

const SignoutBtn = () => {
   const handleSignOut = () => signOut();
   return <button onClick={handleSignOut}>Cerrar Sessión</button>;
};

export default SignoutBtn;
