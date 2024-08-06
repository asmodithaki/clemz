import { useState, useEffect } from "react";
import Genre from "../../components/about/Genre"
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import Link from "next/link"

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    }
  }, []);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>Clems Official</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                I'm <span>Clement Obichie</span>
              </h3>
              <p>
                
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">Music - Genre</h3>
              <p className="desc">
                Afro Beats
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Genre />
                </div>
              </div>
              <div className="edina_tm_button">
              <a href="/discover"> 
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
                </a>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <Image
                width={445}
                height={599}
                src="/img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className={styles.main}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className={styles.experience}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>New Feature Out Soon</h3>
                  <span>Clemz ft. Teni</span>
                </div>
              </div>
            </div>
          </div>
          {/* End rightpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
            My Dicography
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End About Details Modal */}
    </div>
  );
};

export default About;
