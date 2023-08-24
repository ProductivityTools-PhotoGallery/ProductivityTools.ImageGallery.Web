import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading]);
  return (
    <div>
      <button onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
}
