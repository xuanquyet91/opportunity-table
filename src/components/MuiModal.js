import React, { useMemo, useState } from "react";
import { Box, Button, Typography, Modal } from "../../src/mui";

const style = {
  position: "absolute",
  top: "50%",
  left: "21%",
  transform: "translate(-50%, -50%)",
  width: 380,
  height: 132,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  fontFamily: "Poppins sans-serif",
  padding: "32px",
};

const MuiModal = ({
  openModal,
  handleCloseModal,
  handleOpenModal,
  styles,
  content1,
  content2,
  title,
  saveButton,
}) => {
  const style = useMemo(() => {
    return {
      position: "absolute",
      top: "50%",
      left: "",
      transform: "translate(-50%, -50%)",
      width: "",
      height: "",
      bgcolor: "background.paper",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      boxShadow: 24,
      p: 4,
      fontFamily: "Poppins sans-serif",
      padding: "",
      ...styles,
    };
  }, []);
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {title ? (
            <Typography
              style={{ fontSize: "20px", fontWeight: 900 }}
              sx={{ mt: 2 }}
            >
              {title}
            </Typography>
          ) : null}
          <Typography
            style={{
              marginTop: "6px",
              fontSize: "17px",
              fontFamily: "Poppins sans-serif",
            }}
            style={{}}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {content1}
          </Typography>
          {content2 ? (
            <Typography
              style={{
                marginTop: "6px",
                fontSize: "17px",
                fontFamily: "Poppins sans-serif",
              }}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {content2}
            </Typography>
          ) : null}

          {saveButton ? (
            <Box
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "baseline",
                marginTop: "35px",
                height: "90px",
              }}
            >
              <Button
                className="buttonCancelModal"
                onClick={handleCloseModal}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button className="buttonOkModal" variant="contained">
                OK
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                className="modalButton"
                onClick={handleCloseModal}
                variant="contained"
                style={{
                  margin: "25px 10px 10px 145px",
                  fontSize: "15px !important",
                  fontFamily: "Poppins sans-serif",
                  padding: "5px 25px",
                }}
              >
                OK
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default MuiModal;
