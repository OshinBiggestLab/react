import GButton from "./components/GButton";
import FamilyTree from "./components/FamilyTree";
import SlideshowSwiper from "./components/SlideshowSwiper";

function App() {
  return (
    <div className="App">
      {/* SlideshowSwiper: Testing slideshow library from Swiper */}
      <SlideshowSwiper />
      <GButton />
      <FamilyTree />
    </div>
  );
}

export default App;
