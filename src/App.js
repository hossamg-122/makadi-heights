import Navbar from "./components/Navbar/Navbar";
//import Router from "./Router/Router";

import Home from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContent } from "./store/actions";
import Features from "./components/Features/Features";

function App() {
  const dispather = useDispatch();
  useEffect(() => {
    // this action will fetch the content of the website when the app starts for first time
    dispather(fetchContent());
  }, []);
  return (
    <>
      <Navbar />
      {/* I make the Content of the website here in main tag not a div or any other tag to follow semantic element design pattern to enhance SEO as search engines crawlers and spiders are 
         are so sensitive to the tags and main tag stands for the content of the website
         */}

      <main>
        <Home />
        <Features />
      </main>
      {/* <Router /> */}
    </>
  );
}

export default App;
