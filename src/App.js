import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";
import Careers, { careersLoader } from "./Pages/Careers/Careers";
import CareersDetails, { CareersDetailsLoader } from "./Pages/Careers/CareersDetails";
import CareersError from "./Pages/Careers/CareersError";

//layouts
import RootLayouts from "./Layouts/RootLayouts";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader} />
        <Route
          path=":id"
          element={<CareersDetails />}
          loader={CareersDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
