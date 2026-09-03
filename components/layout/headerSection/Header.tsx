import TopBar from "./topBar";
import MainHeader from "./mainHeader";
import Navbar from "./navBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <MainHeader />
      <Navbar />
    </header>
  );
}
