import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Homepage/Home";
import About from "../Components/About/About";
import Team from "../Components/Team/Team";
import Contact from "../Components/ContactUs/Contact";
import TeamDetails from "../Components/Team/TeamDetails";
import TestimonialMain from "../Components/Testimonial/TestimonialMain";
import Faq from "../Components/FAQ/Faq";
import Projects from "../Components/Projects/Projects";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import News from "../Components/News/News";
import NewsDetails from "../Components/News/NewsDetails";
import ServiceMain from "../Components/Services/ServiceMain";
import SingleService from "../Components/Services/SingleService";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/team",
        element: <Team></Team>,
      },

      {
        path: "/team-details",
        element: <TeamDetails></TeamDetails>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/testimonial",
        element: <TestimonialMain></TestimonialMain>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/all-projects",
        element: <Projects></Projects>,
      },

      {
        path: "/project-details",
        element: <ProjectDetails></ProjectDetails>,
      },

      {
        path: "/all-news",
        element: <News></News>,
      },
      {
        path: "/news-details",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "/all-services",
        element: <ServiceMain></ServiceMain>,
      },

      {
        path: "/single-service",
        element: <SingleService></SingleService>,
      },
    //   {
    //     path: "/explore",
    //     element: <ExploreUs />,
    //   },
    //   {
    //     path: "/career",
    //     element: <CareerMain></CareerMain>,
    //   },
    //   {
    //     path: "/job/:id",
    //     element: <JobDetailPage></JobDetailPage>,
    //   },
    //   {
    //     path: "/contact",
    //     element: <ContactUs></ContactUs>,
    //   },
    //   {
    //     path: "/blog",
    //     element: <Blogs></Blogs>,
    //   },
    //   {
    //     path: "/IT-Strategy",
    //     element: <ITStrategy></ITStrategy>,
    //   },
    //   {
    //     path: "/HR-Strategy",
    //     element: <HRStrategy />,
    //   },
    //   {
    //     path: "/HR-Services",
    //     element: <HRServices></HRServices>,
    //   },
    //   {
    //     path: "/IT-Services",
    //     element: <ITService></ITService>,
    //   },
    //   {
    //     path: "/Career-Counselling",
    //     element: <CareerCounciling></CareerCounciling>,
    //   },
    //   {
    //     path: "/Health-Tourism",
    //     element: <HealthTourism />,
    //   },
    ],
  },
]);

export default router;