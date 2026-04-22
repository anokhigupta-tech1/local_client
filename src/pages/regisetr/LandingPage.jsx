import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, Wrench, Phone, Hammer } from "lucide-react";
import { useState } from "react";
import FindServiceForm from "./FindServiceForm";
import OfferServiceForm from "./ OfferServiceForm";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const [role, setRole] = useState(null);

  if (role === "find") return <FindServiceForm />;
  if (role === "offer") return <OfferServiceForm />;

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="w-full max-w-7xl ">
        {/* Hero Section */}
        <div className="flex relative h-[300px] lg:h-[400px] rounded-2xl md:mb-10 my-6 md:w-2/3 w-full  md:mx-auto   ">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            className="w-full  h-full object-cover rounded-2xl"
          />
          {/* <img
            src={logo}
            className="w-full md:w-1/2 h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black/50 flex rounded-2xl flex-col items-center justify-center text-center px-4">
            <div className="bg-teal-600 p-4 rounded-2xl mb-6">
              <Hammer className="text-white w-8 h-8" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Local Service <span className="text-yellow-400">Connect</span>
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="-mt-16 bg-white rounded-t-3xl px-6 lg:px-20 py-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Local expertise, right at your doorstep.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Connecting you with the best plumbers, tutors, and professionals in
            your community.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-10">
            <Card
              onClick={() => setRole("find")}
              className="cursor-pointer p-6 bg-teal-700 text-white rounded-2xl w-full lg:w-96 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">Find a Service</h3>
                  <p className="text-sm opacity-80">I am looking for help</p>
                </div>
                <Search />
              </div>
            </Card>

            <Card
              onClick={() => setRole("offer")}
              className="cursor-pointer p-6 border-2 border-teal-600 rounded-2xl w-full lg:w-96 hover:scale-105 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700">
                    Offer a Service
                  </h3>
                  <p className="text-sm text-gray-500">I am a professional</p>
                </div>
                <Wrench className="text-teal-600" />
              </div>
            </Card>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <Separator className="flex-1" />
            <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
            <Separator className="flex-1" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-6">
            <Button variant="outline" className="w-full lg:w-60">
              Google
            </Button>
            <Button variant="outline" className="w-full lg:w-60">
              <Phone className="mr-2 h-4 w-4" />
              Phone
            </Button>
          </div>

          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-teal-600 cursor-pointer">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
