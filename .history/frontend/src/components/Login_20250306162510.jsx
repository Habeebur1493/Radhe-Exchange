import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, RefreshCw } from "lucide-react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
    });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/dashboard"; // Redirect to a protected page
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, result: num1 + num2 };
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="main flex items-center justify-center min-h-screen bg-[--primary-background]">
      <div className="bg-black p-6 w-75 h-100 border-[5px] border-[#3d3636]">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">RADHE Exchange</h2>
        <form 
        onSubmit={handlelogin}
        className="space-y-4 text-[14px]">
          {/* Username Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              User Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter User Name"
              className="mt-1 p-1 w-full bg-[#ffffff] border rounded-sm focus:ring focus:ring-blue-300"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Field with Visibility Toggle */}
          <div className="relative mb-7">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password:
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="mt-1 p-1 w-full bg-[#ffffff] border rounded-sm focus:ring focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-8 text-gray-500"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          {/* CAPTCHA */}
          <div className="flex justify-center items-center space-x-3 bg-[#d4d4d4] rounded-lg p-2 mb-7">
            <span className="text-lg font-medium">{captcha.num1} + {captcha.num2} = ?</span>
            <input
              type="text"
              name="captcha"
              id="captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Solve Captcha"
              className=" w-22 text-[12px] p-1 border rounded-lg bg-white focus:ring focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={refreshCaptcha}
              className="text-blue-500"
            >
              <RefreshCw size={18} />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" text-[16px] w-full btn bg-[--secondary-background] border-[1px] border-[#84e2f5] text-white py-3 rounded-lg font-bold"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
