<template>
  <div class="courses-container">
    <div class="courses-header-wrapper">
      <h1>forex trading</h1>
      <h2>free courses</h2>
    </div>
    <p>
      Search through the list of free courses available here for you at no cost
    </p>

    <div class="search-div">
      <div class="search-wrapper">
        <input
          list="courses"
          type="search"
          name="search"
          id="search-course"
          placeholder="search course"
        /><button>find course</button>
      </div>
      <datalist id="courses">
        <option value="Introduction To Forex">course 1</option>
        <option value="Technical Analysis">course 2</option>
        <option value="Market Structure">course 3</option>
        <option value="Smart Money Concept">course 4</option>
        <option value="Advanced Smart Money Concept">course 5</option>
        <option value="Psycology Of Trading">course 6</option>
        <option value="Real Life Trading Sessions">course 7</option>
      </datalist>
    </div>
    <h3>
      Disclaimer: Trading involves risks, and the information provided in these
      videos is for educational purposes only. Always conduct your research and
      consider consulting a financial advisor.
    </h3>
    <courses />
  </div>
</template>

<style lang="scss" scoped>
.courses-container {
  width: 100%;
  height: fit-content;
  padding-top: 18vh;
  padding-bottom: 4vh;

  .courses-header-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    margin: 10px auto;
    gap: 10px;

    h4,
    h2,
    h1 {
      margin: 5px;
      color: rgb(37, 97, 89);
    }
    h4 {
      position: relative;
      font-size: 25px;
    }

    h2 {
      font-size: 30px;
    }
    h1 {
      font-size: 50px;
      text-transform: uppercase;
      color: rgb(230, 89, 7);
      font-weight: 700;
      position: relative;
    }

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .search-div {
    width: 550px;
    height: 45px;
    margin: 20px auto;

    .search-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0;
      border: 1px solid rgb(37, 97, 89);
      overflow: hidden;
      border-radius: 2px;

      input {
        border: none;
        padding: 0 15px;
        height: 100%;
        width: 75%;
        outline: none;
      }
      button {
        border: none;
        width: 25%;
        height: 100%;
        background: rgb(37, 97, 89);
        color: white;

        &:hover {
          transform: none;
          font-size: 14px;
        }

        &:active {
          font-size: 16px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  h3 {
    width: 80%;
    margin: 20px auto;
    color: red;
  }
}
</style>