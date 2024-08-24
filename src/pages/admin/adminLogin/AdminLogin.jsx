import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Layout from "../../../components/layout/Layout";

export default function AdminLogin() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) {
      return toast.error("All fields required!");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfull");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login failed!");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        {/* Card  */}
        <Card
          className="w-full max-w-[24rem]"
          style={{
            background:
              mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
          }}
        >
          {/* CardHeader */}
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
            style={{
              background:
                mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
            }}
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
              <div className=" flex justify-center">
                {/* Image  */}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
                  className="h-20 w-20"
                />
              </div>
            </div>

            {/* Top Haeding  */}
            <Typography
              variant="h4"
              style={{
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              Admin Login
            </Typography>
          </CardHeader>

          {/* CardBody */}
          <CardBody>
            <form className=" flex flex-col gap-4">
              {/* First Input  */}
              <div>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Second Input  */}
              <div>
                <Input
                  type="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Login Button  */}
              <Button
                onClick={login}
                style={{
                  background:
                    mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                  color:
                    mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
                }}
              >
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
