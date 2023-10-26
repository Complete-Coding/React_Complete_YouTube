import React from "react";

function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";

  return (
    <React.Fragment>
      <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
      <p>ddd</p>
    </React.Fragment>
  );
}

export default TodoItem1;
