// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";

// export default function PaymentPage({ amount, country, userId, phone, email }) {
//   const navigate = useNavigate();
//   const handlePayment = () => {
//     const options = {
//       key: import.meta.env.VITE_ROZARPAY_KEY, // 👈 Replace with your test key
//       amount: amount * 100, // Razorpay works in paise
//       currency: country === "IN" ? "INR" : "USD",
//       name: "Service Booking",
//       description: `Booking for User ${userId}`,
//       image: "https://yourlogo.com/logo.png", // optional

//       handler: function (response) {
//         console.log("Payment Success:", response);

//         alert(
//           `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`,
//         );
//         navigate("/my-bookings");
//       },

//       prefill: {
//         name: userId,
//         email: email,
//         contact: phone,
//       },

//       notes: {
//         user_id: userId,
//         country: country,
//       },

//       theme: {
//         color: "#0f766e", // teal
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="m flex items-center justify-center bg-gray-100 px-4 py-10">
//       <Card className="w-full max-w-lg rounded-2xl shadow-md">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl">
//             Complete Payment
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space">
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>User ID</span>
//               <span>{userId}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Email</span>
//               <span>{email}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Phone</span>
//               <span>{phone}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Country</span>
//               <span>{country}</span>
//             </div>

//             <div className="flex justify-between font-semibold text-lg pt-4 border-t">
//               <span>Total Amount</span>
//               <span>
//                 {country === "IN" ? "₹" : "$"}
//                 {amount}
//               </span>
//             </div>
//           </div>

//           <Button
//             onClick={handlePayment}
//             className="w-full bg-teal-600 hover:bg-teal-700 rounded-xl"
//           >
//             Pay Now
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// 📄 PaymentPage.jsx (FULL FIXED)

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ Get data from BookingPage
//   const { amount, country, userId, phone, email, serviceName } =
//     location.state || {};

//   // ✅ Safety check (important)
//   if (!amount) {
//     return (
//       <div className="text-center mt-20 text-red-500">
//         Invalid Payment Request ❌
//       </div>
//     );
//   }

//   const handlePayment = () => {
//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_ROZARPAY_KEY, // your key
//       amount: amount * 100,
//       currency: country === "IN" ? "INR" : "USD",
//       name: "Service Booking",
//       description: serviceName || "Booking Payment",

//       handler: function (response) {
//         console.log("✅ Payment Success:", response);

//         // 👉 Redirect to success page
//         navigate("/success", {
//           state: {
//             bookingId: response.razorpay_payment_id,
//           },
//         });
//       },

//       prefill: {
//         name: userId,
//         email: email,
//         contact: phone,
//       },

//       notes: {
//         user_id: userId,
//         country: country,
//       },

//       theme: {
//         color: "#0f766e",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-100 px-4 py-10">
//       <Card className="w-full max-w-lg rounded-2xl shadow-md">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl">
//             Complete Payment
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Name</span>
//               <span>{userId}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Email</span>
//               <span>{email}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Phone</span>
//               <span>{phone}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Service</span>
//               <span>{serviceName}</span>
//             </div>

//             <div className="flex justify-between font-semibold text-lg pt-4 border-t">
//               <span>Total Amount</span>
//               <span>
//                 {country === "IN" ? "₹" : "$"}
//                 {amount}
//               </span>
//             </div>
//           </div>

//           <Button
//             onClick={handlePayment}
//             className="w-full bg-teal-600 hover:bg-teal-700 rounded-xl mt-4"
//           >
//             Pay Now
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get all required data INCLUDING bookingId
  const { amount, country, userId, phone, email, serviceName, bookingId } =
    location.state || {};

  // ✅ Safety check
  if (!amount || !bookingId) {
    return (
      <div className="text-center mt-20 text-red-500">
        Invalid Payment Request ❌
      </div>
    );
  }

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_ROZARPAY_KEY,
      amount: amount * 100,
      currency: country === "IN" ? "INR" : "USD",
      name: "Service Booking",
      description: serviceName || "Booking Payment",

      // 🔥 MAIN FIX HERE
      handler: async function (response) {
        console.log("✅ Payment Success:", response);

        try {
          const res = await fetch("/api/bookings/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId: bookingId, // ✅ CORRECT bookingId
            }),
          });

          const data = await res.json();
          console.log("VERIFY RESPONSE:", data);

          if (!data.success) {
            alert("Payment verification failed ❌");
            return;
          }

          // ✅ Go to success page after backend confirms
          navigate("/success", {
            state: {
              bookingId: bookingId,
            },
          });
        } catch (err) {
          console.error("Payment verify error:", err);
          alert("Something went wrong ❌");
        }
      },

      prefill: {
        name: userId,
        email: email,
        contact: phone,
      },

      notes: {
        user_id: userId,
        booking_id: bookingId,
      },

      theme: {
        color: "#0f766e",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-10">
      <Card className="w-full max-w-lg rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Complete Payment
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Name</span>
              <span>{userId}</span>
            </div>

            <div className="flex justify-between">
              <span>Email</span>
              <span>{email}</span>
            </div>

            <div className="flex justify-between">
              <span>Phone</span>
              <span>{phone}</span>
            </div>

            <div className="flex justify-between">
              <span>Service</span>
              <span>{serviceName}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg pt-4 border-t">
              <span>Total Amount</span>
              <span>
                {country === "IN" ? "₹" : "$"}
                {amount}
              </span>
            </div>
          </div>

          <Button
            onClick={handlePayment}
            className="w-full bg-teal-600 hover:bg-teal-700 rounded-xl mt-4"
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
