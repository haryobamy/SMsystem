import { If, Then } from 'react-if';

function Login() {
  return (
    <form className="w-full">
      <div className="w-full flex flex-col items-start gap-[2.5rem] md:gap-[3.5rem]">
        <div className="w-full flex flex-col gap-4  md:gap-6">
          <h1 className="font-[700]   text-[1.5rem] ">
            Log in School Mangement
          </h1>
          <p>Please login with your admin credentials</p>
        </div>
        <div>
          {/* <If condition={true}>
                <Then>
                    <p>{error}</p>
                </Then>
            </If> */}
        </div>
      </div>
    </form>
  );
}

export default Login;
