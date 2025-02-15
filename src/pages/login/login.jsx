import "./login.css";

export default function LoginPage(){
    return(
        <div className="bg-picture w-full h-screen  flex justify-center items-center">
            <form>
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
            <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[100px] object-cover "
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[30px]
            mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
           
          />

          <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg">
            Login
          </button>
            </div>
            </form>
        </div>
    )
}

