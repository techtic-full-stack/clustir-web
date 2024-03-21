import { Modal, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import React, { FC } from "react";

interface VerifySuccessModalProps {
    visible: boolean;
    onClose: () => void;
}

const VerifySuccessModal: FC<VerifySuccessModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            title="Account verified!"
            open={visible}
            centered
            footer={null}
            onCancel={onClose}
            width={400}
            style={{ textAlign: "center" }}
        >
            
            <div style={{ marginBottom: 24 }}>
                <CheckCircleOutlined style={{ fontSize: 36, color: "#4C45EE" }} />
            </div>
            <h2 style={{ color: "#E4E4E4", marginBottom: 16 }}>Account verified!</h2>
            <p style={{ color: "#000", marginBottom: 24 }}>
                Thank you for verifying your account, you’re all set.
            </p>
            <div className="flex justify-end ">

         
            <Button
                type="primary"
                style={{ backgroundColor: "#4C45EE", color: "#FFF" }}
                onClick={onClose}
            >
                Next
            </Button>   </div>
        </Modal>
    );
};

export default VerifySuccessModal;
