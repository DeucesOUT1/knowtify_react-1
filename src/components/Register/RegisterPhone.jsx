import React, { useEffect, useState } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { Button, Form, Input, Card, Select, Spin, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  setDoc,
  doc,
  db,
  fsTimeStamp,
  collection,
  getDocs,
  where,
  query,
} from "../../config/firebase.jsx";
import { handleSendCode, handleVerifyCode } from "../../config/signinphone.jsx";

function RegisterPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [codeSent, setCodeSent] = useState(false);
  const navigate = useNavigate();

  const onSendCode = () => {
    handleSendCode(phoneNumber, setConfirmationResult, setCodeSent);
  };

  const onVerifyCode = () => {
    handleVerifyCode(confirmationResult, verificationCode);
    if (confirmationResult) {
      navigate("/patientdashboard", { replace: true });
      console.log("Verify Success");
    } else {
      console.log("Failed");
    }
  };

  return (
    <Card
      title="SignIn Phone"
      bordered={true}
      style={{ width: 350 }}
      className="drop-shadow-md mt-20"
    >
      <div>
        <div>
          <Form>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input onChange={(e) => setPhoneNumber(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Verification Code"
              name="verificationCode"
              rules={[
                {
                  required: true,
                  message: "Please input the verification code!",
                },
              ]}
            >
              <Input
                disabled={!codeSent}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </Form.Item>
             <Form.Item style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                onClick={onSendCode}
                disabled={!phoneNumber || codeSent}
                className="hover:bg-green-700"
                style={{ marginRight: 40 }}
              >
                Send Code
              </Button>
              <Button
                onClick={onVerifyCode}
                disabled={!verificationCode}
                className="hover:bg-green-700"
              >
                Verify Code
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </Card>
  );
}

export default RegisterPhone;
