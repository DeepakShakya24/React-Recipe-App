import React from "react";

const Form = ({ getRecipe }) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12" align="center">
          <div className="form-div">
            <form onSubmit={getRecipe}>
              <input type="text" className="form-control" name="food" />
              <button type="submit" className="btn btn-secondary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
