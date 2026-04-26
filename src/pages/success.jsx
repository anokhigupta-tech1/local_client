// 📄 src/pages/SuccessPage.jsx

import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingId = location.state?.bookingId;

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-4 text-lg">
        Booking ID: <span className="font-bold">{bookingId}</span>
      </p>

      <button
        onClick={() => navigate("/my-bookings")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to My Bookings
      </button>
    </div>
  );
}
