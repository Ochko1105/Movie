export const Footer = () => {
  return (
    <div className="w-[1440px] h-[280px] bg-[#4338CA] flex mx-auto mt-[51px] justify-between  pl-27 pt-10 pr-35">
      <div className=" mt-10">
        <div className="flex gap-2 items-center">
          <img src="/film.png" className="h-5 w-5"></img>
          <p>Movie Z</p>
        </div>
        <div>© 2024 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex">
        {" "}
        <div className="  pt-10 ">
          <div>Contatct information</div>
          <div className="flex items-center gap-3">
            <img src="/Vector.png" className="h-4 w-4"></img>
            <div>
              <div>Email</div>
              <div>support@movieZ.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/phoneicon.png" className="h-4 w-4"></img>
            <div>
              <div>Phone</div>
              <div>+976 (11) 123-4567</div>
            </div>
          </div>
        </div>
        <div className="pt-10 pl-10">
          <div>Follow us</div>
          <div className="flex gap-2">
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};
