import { signInWithGoogle } from "./fierbase";

export default function Login() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
}
