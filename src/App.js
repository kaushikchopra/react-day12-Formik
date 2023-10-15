import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import Editbook from "./Components/EditBook";
import DataProvider from "./Context/BookStoreContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/add" element={<AddBook />} />
          <Route exact path="/edit/:id" element={<Editbook />} />
        </Routes>

      </DataProvider>

    </div>
  );
}

export default App;
