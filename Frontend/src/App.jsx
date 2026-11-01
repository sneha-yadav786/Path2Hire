import Home from "./sections/Home/Hero";
import Navbar from "./components/Navbar/Navbar"

import Analyze from "./sections/Analyze/Analyze";
import Stories from "./sections/Stories/Stories";
import Feedback from "./sections/Feedback/Feedback";
import Footer from "./sections/Footer/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Home/>
        
        <Analyze/>
        <Stories/>
        <Feedback/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;