import React from "react";
import ServicesCard from "../../parts/Services/ServicesCard";
import ServicesDetails from "../../parts/Services/ServicesDetails";
import "./Services.css";
import { Bounce } from "@stahl.luke/react-reveal";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row align-items-center justify-content-center services-1">
          <Bounce cascade top big>
            <div className="col-md-5 me-5">
              <h1 className="services-heading">
                Turning Ideas Into
                <br />
                <span>
                  Friendly and <br />
                  Attractive Websites
                </span>
                <br />
                is My Specialist.
              </h1>
            </div>
          </Bounce>

          <div className="col-md-5">
            <ServicesDetails
              title="Web Apps"
              text="Create an attractive and eye-catching website."
              loc={process.env.PUBLIC_URL + "/images/ic-web.svg"}
              count="0"
            />
            <ServicesDetails
              title="User Interface Design"
              text="We create UI design that is special and looks elegant."
              loc={process.env.PUBLIC_URL + "/images/ic-user.svg"}
              count="1"
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center services-2">
          <div className="col-md-5 me-5">
            <ServicesCard
              title="Website Apps"
              loc={process.env.PUBLIC_URL + "/images/services-card-web.png"}
              text="10 projects"
              count="0"
            />
            <ServicesCard
              title="UI Design"
              loc={process.env.PUBLIC_URL + "/images/services-card-design.png"}
              text="20 projects"
              count="1"
            />
          </div>

          <div className="col-md-5">
            <Bounce cascade top big>
              <h1 className="services-heading">
                Approximately One Year as a
                <br />
                <span>Full-Stack Developer</span>
                <br />
                and I'm an{" "}
                <span>undergraduate Informatics Engineering student</span>.
              </h1>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
