import { Fragment } from "react";
import "./Filters.css";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const brands = ["Eyebogler", "Tokyo Talkies", "HRX", "BEING REAL"];
const genders = ["men", "women"];

const Filters = ({
  clearFilters,
  sort,
  setSort,
  currSize,
  setCurrSize,
  currBrand,
  setCurrBrand,
  currGender,
  setCurrGender,
}) => {
  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <hr className="divider" />
      </div>
      <div className="filters-container">
        {/* SORT */}
        <div className="sort">
          <h4 className="filter-name">Sort By</h4>
          <form name="sortBy">
            <input
              type="radio"
              id="l2h"
              name="low to high"
              value="l2h"
              checked={sort === "l2h"}
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="l2h"> Low to High</label>
            <br />
            <input
              type="radio"
              id="h2l"
              name="high to low"
              value="h2l"
              checked={sort === "h2l"}
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="h2l"> High to Low</label>
            <br />
          </form>
        </div>
        {/* SIZE FILTER */}
        <div className="size">
          <h4 className="filter-name">Size</h4>
          <form name="size" className="size-filters">
            {sizes.map((size, index) => (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  id={size}
                  name={size}
                  value={size}
                  checked={currSize.includes(size)}
                  onChange={(e) => {
                    // e.preventDefault();
                    if (currSize.includes(size)) {
                      let temp = [...currSize];
                      temp = temp.filter((item) => item !== size);
                      setCurrSize(temp);
                    } else {
                      const temp = [...currSize];
                      temp.push(size);
                      setCurrSize(temp);
                    }
                  }}
                />
                <label htmlFor={size}> {size}</label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        {/* BRAND FILTER */}
        <div className="brand">
          <h4 className="filter-name">Brand</h4>
          <form name="size" className="brand-filters">
            {brands.map((brand, index) => (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  id={brand}
                  name={brand}
                  value={brand}
                  checked={currBrand.includes(brand)}
                  onChange={(e) => {
                    if (currBrand.includes(brand)) {
                      let temp = [...currBrand];
                      temp = temp.filter((item) => item !== brand);
                      setCurrBrand(temp);
                    } else {
                      const temp = [...currBrand];
                      temp.push(brand);
                      setCurrBrand(temp);
                    }
                  }}
                />
                <label htmlFor={brand}> {brand}</label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        {/* GENDER FILTER */}
        <div className="gender">
          <h4 className="filter-name">Ideal for</h4>
          <form name="size" className="gender-filters">
            {genders.map((gender, index) => (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  id={gender}
                  name={gender}
                  value={gender}
                  checked={currGender.includes(gender)}
                  onChange={(e) => {
                    if (currGender.includes(gender)) {
                      let temp = [...currGender];
                      temp = temp.filter((item) => item !== gender);
                      setCurrGender(temp);
                    } else {
                      const temp = [...currGender];
                      temp.push(gender);
                      setCurrGender(temp);
                    }
                  }}
                />
                <label htmlFor={gender} style={{ textTransform: "capitalize" }}>
                  {" "}
                  {gender}
                </label>
                <br />
              </Fragment>
            ))}
            <br />
          </form>
        </div>
        {/* CLEAR FILTERS */}
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filters;
