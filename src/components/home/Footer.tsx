export const Footer = () => {
  return (
    <div className="w-[375px] h-[308px]  sm:w-[1440px] sm:h-[280px] bg-[#4338CA] sm:flex mx-auto mt-[51px] justify-between pl-[20px]  sm:pl-27 sm:pt-[0px] sm:pr-35">
      <div className=" mt-10 pt-10 sm:pt-[0px] ">
        <div className="flex gap-2 items-center">
          <img src="/film.png" className="h-5 w-5"></img>
          <p>Movie Z</p>
        </div>
        <div>© 2024 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex">
        {" "}
        <div className="  pt-[28px] ">
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
        <div className="sm:pt-[28px] pt-[28px] pl-10">
          <div>Follow us</div>
          <div className="sm:flex sm:pt-10flex-col gap-3">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
};
