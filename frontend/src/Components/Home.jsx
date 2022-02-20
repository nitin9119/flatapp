import { useEffect, useState } from "react";

function Home() {
  let [list, setList] = useState(false);
  let [search, setSearch] = useState(false);

  useEffect(() => {
    showList();
  }, []);

  function showList() {
    fetch(`http://localhost:2345/all`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    const dat = list.filter((d) => {
      if (d.block === search) {
        return list;
      }
    });
    console.log(dat);
  }
  return (
    <div>
      <h4>Lists of all Apartments Available:</h4>
      Search -
      <input placeholder="search by block name" onChange={handleChange} />
      {list
        ? list.map((el) => {
            return (
              <li key={el._id} style={{ margin: "10px", padding: "5px" }}>
                Apartment- {el.apartment},flat Number - {el.flatNumber}{" "}
              </li>
            );
          })
        : null}
    </div>
  );
}

export default Home;
