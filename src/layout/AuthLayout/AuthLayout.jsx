
import { Outlet } from "react-router-dom";
import { AuthHeaderContent } from "../../components";
import { AuthFooterContent } from "../../components";

const AuthLayout = () => {
  return (
    <>
    <header>
        <AuthHeaderContent />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <AuthFooterContent />
    </footer>
    </>
  )
}

export default AuthLayout;