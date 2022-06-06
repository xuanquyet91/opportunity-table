import React, { useState } from "react";
import { InfoIcon, AddCircleOutlineIcon, InfoOutlinedIcon } from "../../mui";

import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Approach = (props) => {
  const {
    index,
    title,
    currentClick,
    stateGuidance,
    handleClickCollapse,
    formik,
    stateCkApproach,
    setStateCkApproach,
  } = props;
  const [text, setText] = useState("");
  // const [stateCkApproach, setStateCkApproach] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: "15px",
        }}
      >
        {" "}
        {currentClick?.find((item) => item === "4") ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "-25px",
              marginRight: "5px",
              height: "100%",
            }}
          >
            <RemoveCircleIcon className="blue" />
            <div
              style={{
                height: "calc( 100% - 20px)",
                width: "5px",
                backgroundColor: "rgb(0, 86, 216)",
                marginTop: "6px",
              }}
            ></div>
          </div>
        ) : (
          <div className="circleBox" style={{ marginRight: "10px" }}>
            <AddIcon className="grey" />
          </div>
        )}
        <div style={{ width: "100%" }}>
          <div
            onClick={() => handleClickCollapse("4")}
            className="new-opportunity__body__caption"
            style={{
              borderBottom: currentClick?.find((item) => item === "4")
                ? "1.5px solid #0056d8"
                : "1.5px solid rgb(218, 218, 218)",
              color: currentClick?.find((item) => item === "4")
                ? "#000"
                : "rgb(0 0 0 / 65%)",
            }}
          >
            <div className="new-opportunity__body__caption__text">
              {props.title}
            </div>
            <InfoOutlinedIcon className="infoIcon" />
          </div>
          <div style={{ display: "flex" }}>
            {stateGuidance && currentClick?.find((item) => item === "4") && (
              <div
                style={{
                  width: "180px",
                  textAlign: "left",
                  padding: "13px 10px",
                  backgroundColor: "aliceblue",
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                Discuss the business challenge you are looking to solve.
                Consider: What is the specific problem or issue that needs to be
                resolved? Why is this an issue for the business? What decisions
                need to be made with this information?
              </div>
            )}
            {currentClick?.find((item) => item === "4") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  width: "500px",
                }}
              >
                <div>
                  <div className="title">
                    <div>Proposed Approach</div>
                  </div>
                  <CKEditor
                    formik={formik}
                    editor={ClassicEditor}
                    id="header"
                    data={`<p>${formik.values.ckApproach}</p>`}
                    // onReady={(editor) => {}}
                    key={1}
                    name="ckApproach"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setStateCkApproach(data);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
