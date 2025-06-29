import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrSwim } from "react-icons/gr";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GrSwim />}
          >
            <h3 className="vertical-timeline-element-title">Swimmer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>Swimming skills.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
