document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
         <div class="header-container">
        <div class="header-logo">
          <a href="https://allentertainment.com">
            <img
              src="images/LogoBSNoBackground.png"
              alt="All Entertainment Colorado"
          /></a>
        </div>
        <nav class="header-nav">
          <a href="https://childrensentertainmentcolorado.com/"
            >Children's Entertainment Colorado</a
          >
          <a href="https://bestsoundcolorado.com/">Best Sound Colorado</a>
          <a href="http://www.allentertainmentcolorado.com/about">About All Entertainment Colorado</a>
        </nav>
      </div>
  `;
  document.body.prepend(header);
});
