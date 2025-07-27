
import { Outlet } from "react-router-dom";
import { PublicHeaderContent } from "../../components";
import { PublicFooterContent} from '../../components';

const PublicLayout = () => {
  return (
    <>
    <header>
        <PublicHeaderContent />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <PublicFooterContent />
    </footer>
    </>
  )
}

export default PublicLayout;