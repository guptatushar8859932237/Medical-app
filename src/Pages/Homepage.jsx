import image1 from "../assests/national-cancer-institute-4SiOVKH3DYA-unsplash.jpg";
import image2 from "../assests/Screenshot 2025-06-13 150418.png";
import image3 from "../assests/liver.png";
import image4 from "../assests/medicals.png";
import image5 from "../assests/dashboard.png";
import image6 from "../assests/labs.png";
import image7 from "../assests/insurance11.png";
import image8 from "../assests/billing11.png";
import image9 from "../assests/Reports11.png";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  const cards = [
    {
      title: "Appointment",
      subtitle: "320+ Appointment Today",
      image: image1,
      url: "/Admin/appointment2",
    },
    {
      title: "Patient File",
      subtitle: "250+ Appointment Today",
      image: image2,
      url: "/Admin/patient",
    },
    { title: "Medical", subtitle: "300+ Appointment Today", image: image3 },
    {
      title: "Pharmacy",
      subtitle: "280+ Appointment Today",
      image: image4,
      url: "/Admin/Pharmacy",
    },
    {
      title: "Dashboard",
      subtitle: "270+ Appointment Today",
      image: image5,
      url: "/Admin/dashboard",
    },
    {
      title: "Laboratory",
      subtitle: "260+ Appointment Today",
      image: image6,
      url: "/Admin/ManageLabs",
    },
    {
      title: "Insurance",
      subtitle: "240+ Appointment Today",
      image: image7,
      url: "/Admin/Insurance",
    },
    {
      title: "Billing",
      subtitle: "230+ Appointment Today",
      image: image8,
      url: "/Admin/Billing",
    },
    {
      title: "Reports",
      subtitle: "220+ Appointment Today",
      image: image9,
      url: "/Admin/ReportsInc",
    },
  ];
  const appointments = [
    {
      doctor: "Dr. Nashita",
      department: "Cardiologist",
      date: "02 Sep 2023",
      time: "10:00 - 10:30 AM",
      patient: "John Smith",
    },
    {
      doctor: "Dr. Nashita",
      department: "Cardiologist",
      date: "02 Sep 2023",
      time: "11:00 - 11:30 AM",
      patient: "Jane Smith",
    },
  ];
  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="row g-4">
            {cards.map((card, index) => (
              <div className="col-md-4" key={index}>
                {card.url ? (
                  <NavLink
                    to={card.url}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden hover-shadow">
                      {card.image && (
                        <img
                          src={card.image}
                          className="card-img-top"
                          alt={card.title}
                          style={{ height: "160px", objectFit: "cover" }}
                        />
                      )}
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold mb-2">
                          {card.title}
                        </h5>
                        <p className="card-text text-muted">{card.subtitle}</p>
                      </div>
                    </div>
                  </NavLink>
                ) : (
                  <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                    {card.image && (
                      <img
                        src={card.image}
                        className="card-img-top"
                        alt={card.title}
                        style={{ height: "160px", objectFit: "cover" }}
                      />
                    )}
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold mb-2">{card.title}</h5>
                      <p className="card-text text-muted">{card.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow-lg rounded-4 bg-light p-3 border-0">
            <h5 className="fw-bold mb-3 text-dark">Upcoming Appointments</h5>
            {appointments.map((item, index) => (
              <div key={index} className="mb-3 border-bottom pb-2">
                <strong>{item.doctor}</strong>
                <br />
                <span className="text-muted">{item.department}</span>
                <br />
                <span>{item.patient}</span>
                <br />
                <span className="text-muted">
                  {item.date} | {item.time}
                </span>
              </div>
            ))}
            <div className="text-end">
              <button className="btn btn-outline-dark btn-sm">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
