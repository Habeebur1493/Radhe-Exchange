import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, RefreshCw } from "lucide-react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, result: num1 + num2 };
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              User Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter User Name"
              className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password Field with Visibility Toggle */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>

          {/* CAPTCHA */}
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium">{captcha.num1} + {captcha.num2} = </span>
            <input
              type="text"
              name="captcha"
              id="captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Solve Captcha"
              className="p-2 w-16 border rounded-lg focus:ring focus:ring-blue-300"
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
