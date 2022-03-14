import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";

function App() {
  let [page, setPage] = useState(1);
  let [data, setData] = useState(false);
  let [lastpage, setLastpage] = useState(1);

  useEffect(() => {
    getalldata();
  }, [page]);

  function getalldata() {
    fetch(`http://localhost:2345/flats/all?page=${page}&size=4`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setData(res);
        setLastpage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  var pg = [];
  function pag() {
    for (let i = 1; i <= lastpage; i++) {
      pg.push(i);
    }
    console.log(pg, lastpage);
  }
  pag();

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Home />

      <div style={{ display: "flex" }}>
        {data
          ? data.alFlats.map((e) => {
              return (
                <div
                  key={e._id}
                  style={{
                    width: "23%",
                    border: "5px solid brown",
                    borderRadius: "15px",
                    margin: "10px",
                    padding: "20px 10px 10px 20px",
                    textAlign: "left",
                  }}
                >
                  <img
                    src="https://picsum.photos/200"
                    style={{ width: "200px", height: "200px" }}
                  ></img>
                  <p>{e._id}</p>
                  <p>{e.apartment}</p>
                  <p>{e.flatNumber}</p>
                  <p>{e.flat_id}</p>
                  <p>{e.type}</p>
                  <button className="btn">edit</button>
                  <button
                    className="btn"
                    onClick={() => {
                      fetch(`http://localhost:2345/flate/delete/${e.flat_id}`, {
                        method: "DELETE",
                      }).then(() => {
                        alert(`${e.flat_id} deleted successfully!!!`);
                      });
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })
          : null}
      </div>

      {lastpage
        ? pg.map((el, i) => {
            return (
              <button key={i} onClick={() => setPage(el)}>
                {el}
              </button>
            );
          })
        : null}
    </div>
  );
}

export default App;
