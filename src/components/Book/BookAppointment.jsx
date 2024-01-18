import React, { useState } from "react";
import { Button, Card, Modal, notification } from "antd";
import { ConfigProvider } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import BookAppointmentForm from "./BookAppointmentForm";
import bookheader from "../../assets/Book/header.jpg";
import clinic from "../../assets/Book/clinic.png";
import general from "../../assets/Book/generl.jpg";
import infectious from "../../assets/Book/infectious.jpg";
import internal from "../../assets/Book/internal.jpg";
import internalmed from "../../assets/Book/internalmed.jpg";
import ob from "../../assets/Book/ob.jpg";
import pedia from "../../assets/Book/pedia.jpg";
import physical from "../../assets/Book/physical.jpg";
import pulmonology from "../../assets/Book/pulmonology.jpg";

function BookAppointment() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openNotification = () => {
    notification.success({
      message: 'Appointment Booked',
      description: 'Your appointment has been successfully booked!',
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleBookAppointment = () => {
    // Check if the captcha has been successfully validated
    if (captchaValue) {
      setIsModalVisible(true);
    } else {
      notification.error({
        message: 'Captcha Validation Failed',
        description: 'Please complete the captcha before booking an appointment.',
      });
    }
  };

  return (
    <ConfigProvider>
      <div className="book_appointment container mx-auto">
        <div className="relative">
          <img
            src={clinic}
            alt="bookheader"
            className="absolute top-0 left-0 max-h-20"
          />
          <img
            src={bookheader}
            alt="bookheader"
            className="w-screen min-h-full"
          />
          <div className="absolute mx-auto bottom-1 p-5 left-1 w-full">
            <div className="bg-black bg-opacity-0 p-3 rounded-md">
              <h1 className="text-sm text-color: #15803d mb-4">
                Elevate Your Health Journey: Seamless Booking, Exceptional Care at
                Mountain Top Specialty Clinic.
              </h1>
              <ReCAPTCHA
                sitekey="6LdxRU8pAAAAAPtTPMi4pwlsanI-7R96R7SvkP8k"
                onChange={handleCaptchaChange}
              />
              <Button
                onClick={showModal}
                type="primary"
                className="bg-green-600 rounded mt-3"
                disabled={!captchaValue} // Disable button if captcha is not completed
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
        <div className="pl-8 pr-8 pb-5 pt-5">
          {/* ... (remaining code) ... */}
          <Modal
            title="Book Appointment"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={800}
          >
            <Card>
              <p>
                Ready to prioritize your health? Schedule an appointment with our
                experienced healthcare professionals.
              </p>
              <div className="mt-12 grow">
                <div>
                  <BookAppointmentForm onSuccess={openNotification} onClose={handleCancel} />
                </div>
              </div>
            </Card>
          </Modal>
        </div>
        <div className="pl-8 pr-8 pb-5 pt-5">
          <h1>Contact Us</h1>
          <p>
            <span> 0977 062 5890</span>
            <span> Mountain Top Specialty Clinic</span>
          </p>
        </div>
        <div className="pl-8 pr-8 pb-5 pt-5">
          <h1>Visit Us at</h1>
          <p>
            101 General Luna Road, Global Multispecialty Diagnostic Center, 2nd
            Floor, Unit 4, Baguio City, Philippines
          </p>
        </div>
        <div className="pl-8 pr-8 pb-5 pt-5">
          <h1>Our Specialties</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 content-start px-4 sm:px-8 md:px-16 py-10">
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={general} alt="bookheader" className="" />}
            >
              <h2 className="text-center">General Orthopaedic Surgery</h2>
              <p className="text-center">
                Expertise in musculoskeletal conditions.
              </p>
            </Card>
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={internalmed} alt="bookheader" className="" />}
            >
              <h2 className="text-center">Internal Medicine</h2>
              <p className="text-center">
                Specialized care for Adult Diseases.
              </p>
            </Card>
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={internal} alt="bookheader" className="" />}
            >
              <h2 className="text-center">Internal Medicine</h2>
              <p className="text-center">(Adult Hematology)</p>
            </Card>
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={infectious} alt="bookheader" className="" />}
            >
              <h2 className="text-center">Internal Medicine</h2>
              <p className="text-center">(Infectious Diseases)</p>
            </Card>

            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={pulmonology} alt="bookheader" className="" />}
            >
              <h2 className="text-center">Internal Medicine</h2>
              <p className="text-center">(Pulmonology)</p>
            </Card>
            
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={ob} alt="bookheader" className="" />}
            >
              <h2 className="text-center">Obstetrics and Gynecology</h2>
              <p className="text-center">
                Women's health and reproductive care.
              </p>
            </Card>
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={pedia} alt="bookheader" className="" />}
            >
              <h2 className="text-center">
                Pediatrics, Vaccines, and Immunizations
              </h2>
              <p className="text-center">
                Specialized care for children's health.
              </p>
            </Card>
            <Card
              hoverable
              className="bg-green-700	text-white p-0"
              cover={<img src={physical} alt="bookheader" className="" />}
            >
              <h2 className="text-center">
                Physical Medicine and Rehabilitation
              </h2>
              <p className="text-center">
                Diagnosis and treatment of skin condition
              </p>
            </Card>
            
            
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default BookAppointment;