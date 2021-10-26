import { useState } from "react";

const MovieListFilter = () => {
  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const params = {};

  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  const [show, setShow] = useState(shows[0]);
  const [category, setCategory] = useState(categories[0]);
  const [sortBy, setSortBy] = useState(fields[0]);
  return (
    <div className="col-12 my-5">
      <div className="row align-items-stretch justify-content-center">
        <div className="col-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
          >
            {categories.map((c, id) => (
              <option key={id} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="show" className="form-label">
            Show
          </label>
          <select
            id="show"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setShow(e.target.value)}
            defaultValue={show}
          >
            {shows.map((s, id) => (
              <option key={id} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="show" className="form-label">
            Sort By
          </label>
          <select
            id="show"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSortBy(e.target.value)}
            defaultValue={sortBy}
          >
            {fields.map((f, id) => (
              <option key={id} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2 row align-items-end">
          <button id="submit" className="btn btn-outline-success">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieListFilter;
