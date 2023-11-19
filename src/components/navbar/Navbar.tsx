import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/350109161_1423320454907713_6459269622928135642_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGVR5rkPK-FYJ-j3T7kt69sSzndlguK60pLOd2WC4rrSh0hFEMedz8E4RWUpIuGeJ290wHlDeQT-SqOIj7vVTA2&_nc_ohc=rZosAyBMqYoAX-sZnDT&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAGabdoqb1bMBoyMjoyuLpIEG5zidzzwlbmBrKGETX8HQ&oe=655C5ABB"
            alt=""
          />
          <span>Viet</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};
