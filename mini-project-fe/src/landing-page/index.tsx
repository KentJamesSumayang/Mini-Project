import Header from "../header/Header"
import Priority from "../pages/Priority"
import CreateTodo from "../pages/CreateTodo"
import MyCalendar from "../pages/Calendar"
import Achievement from "../pages/Achievement"
import Todo from "../pages/Todo"
import { Link } from "react-router-dom"

export const LandingPage = () => {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-5">
        <div className="border-1 p-2 border-solid ">
          <Priority />
        </div>
        <div className="border-1 p-2 border-solid ">
          <CreateTodo />
        </div>
        <div className="border-1 p-2 border-solid ">
          <MyCalendar />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-5">
        <div className="border-1 p-2 border-solid overflow-hidden">
          <Link to="/todo">
            <Todo />
          </Link>
        </div>
        <div className="border-1 p-2 border-solid ">
          <Link to="/achievement">
            <Achievement />
          </Link>
        </div>
      </div>
    </main>
  )
}
