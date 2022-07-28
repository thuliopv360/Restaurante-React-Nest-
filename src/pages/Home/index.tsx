const Home = () => {
  return (
    <div>
      <div className="menu">
        <img src="" alt="logo" />
        <img src="" alt="home" />
        <img src="" alt="setting" />
        <img src="" alt="logoout" />
      </div>
      <div className="home-content">
        <header>
          <div>
            <h1>Resturante Fresh</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img src="" alt="search-icon" />
            <input type="text" />
          </div>
        </header>
        <section>
          <div>
            <p>Pratos</p>
          </div>
          <div>
            <h2>Escolha seu prato</h2>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
          <div className="list">
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>
      </div>
      <aside>
        <div></div>
        <div></div>
        <div></div>
      </aside>
    </div>
  );
};

export default Home;
