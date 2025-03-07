import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, RefreshCw } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Function to generate a new CAPTCHA
  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 90) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, result: num1 + num2 };
  }

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);


 
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate CAPTCHA before proceeding with login
    if (parseInt(captchaInput) !== captcha.result) {
      toast.error("Invalid CAPTCHA. Please try again.");

      return;
    }

    if (!username || !password) {
      toast.warn("Please enter both username and password.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      console.log("Saved Token:", localStorage.getItem("token"));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("Saved User:", localStorage.getItem("user"));

      setMessage("Login successful!");
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Login failed. Please check your credentials.";
        toast.error(errorMessage);

      if (error.response && error.response.data) {
        
        toast.error(error.response.data.message || "Login failed");
      } else {
        
        toast.error("Server error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="main flex items-center justify-center min-h-screen bg-[--primary-background]">
      <div className="bg-black p-6 w-75 h-100 border-[5px] border-[#3d3636]">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          RADHE Exchange
        </h2>
        <form onSubmit={handleLogin} className="space-y-4 text-[14px]">
          {/* Username Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              User Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter User Name"
              className="mt-1 p-1 w-full bg-[#ffffff] border rounded-sm focus:ring focus:ring-blue-300"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          {/* Password Field with Visibility Toggle */}
          <div className="relative mb-7">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password:
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="mt-1 p-1 w-full bg-[#ffffff] border rounded-sm focus:ring focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-8 text-gray-500"
            >
              {passwordVisible ? (
                <EyeOffIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </button>
          </div>

          {/* CAPTCHA */}
          <div className="flex justify-center items-center space-x-3 bg-[#d4d4d4] rounded-lg p-2 mb-7">
            <span className="text-lg font-medium">
              {captcha.num1} + {captcha.num2} = ?
            </span>
            <input
              type="number"
              name="captcha"
              id="captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Solve Captcha"
              className="w-22 text-[12px] p-1 border rounded-lg bg-white focus:ring focus:ring-blue-300"
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
          <p className="mt-2 text-red-500">{message}</p>
          <button
            type="submit"
            disabled={isLoading || !username || !password}
            className={`text-[16px] w-full btn bg-[--secondary-background] border-[1px] border-[#84e2f5] text-white py-3 rounded-lg font-bold ${
              isLoading || !username || !password
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isLoading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
