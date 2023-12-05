const Form = () => {
  return (
    <div className="md:p-10 p-5 bg-white shadow-lg rounded-xl">
      <form action="">
        <div className="flex justify-between gap-3">
          <label className="w-[50%]">
            First name
            <input type="text" placeholder="enter first name" />
          </label>
          <label className="w-[50%]">
            Last name
            <input type="text" placeholder="enter last name" />
          </label>
        </div>
        <label>
          Email
          <input type="text" placeholder="enter email address" />
        </label>
        <label>
          Contact Number
          <input type="text" placeholder="enter contact number" />
        </label>
        <label>
          Your Country
          <input type="text" placeholder="enter your country" />
        </label>
        <label>
          Your current challenge
          <textarea name="Challenge" rows={4}></textarea>
        </label>
        <p className=" mt-2 -mb-1 text-base font-medium text-black">What are you more interested in:</p>
        <div className="flex justify-between flex-wrap md:items-center md:flex-row flex-col">
          <div>
            <input type="checkbox" id="nm" />
            <label
              htmlFor="nm"
              className="hover:text-black cursor-pointer text-sm relative -top-[.125rem] ml-2">
              Network Management
            </label>
          </div>
          <div>
            <input type="checkbox" id="cyber" />
            <label
              htmlFor="cyber"
              className="hover:text-black cursor-pointer text-sm relative -top-[.125rem] ml-2">
              CyberSecurity
            </label>
          </div>
          <div>
            <input type="checkbox" id="cs" />
            <label
              htmlFor="cs"
              className="hover:text-black cursor-pointer text-sm ml-2 relative -top-[.125rem]">
              Customized Solution
            </label>
          </div>
        </div>
        <div className="w-fit mt-5 ">
          <button>Book my Demo</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
