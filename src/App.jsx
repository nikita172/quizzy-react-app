import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import QuizPortal from "./pages/quizPortal/QuizPortal";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz/:type",
    element: <QuizPortal />
  },
  {
    path: "/quiz/:type/questions/:id",
    element: <Quiz />
  },
  {
    path: "/quiz/:type/result",
    element: <Result />
  }

]);

function App() {
  return <RouterProvider router={router} />

}

export default App
