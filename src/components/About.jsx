import "../styles/About.css";
import { PiCookingPot } from "react-icons/pi";
import { SiHelpscout } from "react-icons/si";
import { GrSwim } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya adalah pribadi yang antusias dan kreatif, dengan skill memasak
          yang sudah menurun bakat ayah saya ke saya. Memasak bagi saya bukan
          sekadar aktivitas, tapi cara untuk mengekspresikan diri dan
          menghadirkan kebahagiaan bagi orang lain. Dari masakan rumahan hingga
          eksperimen resep kekinian, saya senang mengeksplorasi berbagai cita
          rasa dan teknik baru di dapur.
        </p>
        <p>
          Selain memasak, saya memiliki hobi berenang, bermain basket, dan
          membaca buku yang membantu menjaga keseimbangan antara logika dan
          kreativitas dalam keseharian. Saya juga menikmati waktu luang dengan
          mengikuti konten kuliner, mencoba resep baru, dan berbagi hasil
          masakan di media sosial. <br />
          Spotlight Saya saat SMA adalah ketika saya menjadi Danton(Komandan
          Peleton) Pramuka Sekolah SMAN1 Silima Pungga-pungga
        </p>
        <h4>Scout Movement & Swimmer</h4>
        <div className="skills">
          <PiCookingPot />
          <SiHelpscout />
          <GrSwim />
          <FaJava />
          <FaWindows />
          <FaCss3Alt />
        </div>
      </div>
    </section>
  );
}

export default About;
