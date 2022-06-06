import { Button } from "@mui/material";
import React from "react";
import InputDatePicker from "../../components/InputDatePicker";
import { slidebarFilterData } from "../../data";
import { KeyboardArrowDownOutlinedIcon, Checkbox } from "../../mui";

const SlidebarFilter = ({ checkShowSlide }) => {
  return (
    <div
      style={{ left: checkShowSlide ? "0" : "-370px" }}
      className="sliderbar-filter"
    >
      <div className="sliderbar-filter__header">
        <div>
          <img src="https://www.svgrepo.com/show/318331/filter.svg" />
          <span> Filter</span>
        </div>
        <div>
          <Button variant="outlined">Expand All</Button>
        </div>
      </div>
      <div className="sliderbar-filter__body">
        {slidebarFilterData?.map((item) => (
          <div className="sliderbar-filter__body__box">
            <div className="sliderbar-filter__body__box__title">
              {" "}
              {item.title}
              <div>
                <KeyboardArrowDownOutlinedIcon />
              </div>
            </div>
            <div className="sliderbar-filter__body__box__content">
              {item.options ? (
                item.options?.map((option) => (
                  <div className="sliderbar-filter__body__box__content__group">
                    <div className="sliderbar-filter__body__box__content__group__left">
                      <span>
                        <Checkbox />
                      </span>
                      <span>{option}</span>
                    </div>
                    <div className="sliderbar-filter__body__box__content__group__right">
                      1
                    </div>
                  </div>
                ))
              ) : (
                <div className="sliderbar-filter__body__box__content__date">
                  <div style={{ width: "140px" }}>
                    <InputDatePicker
                      style={{ width: "100%" }}
                      // title={"Due Date"}
                      dateFormat="d MMM yyyy"
                      placeholderText="From"
                      // contentSelected={props.formik.values.dueDate}
                      // infoImg={checked ? "yes" : null}
                      // onChange={(date: Date) => {
                      //   props.formik.setFieldValue("dueDate", date);
                      // }}
                      // name="dueDate"
                    />
                  </div>
                  <div style={{ width: "140px" }}>
                    <InputDatePicker
                      style={{ width: "100%" }}
                      // title={"Due Date"}
                      dateFormat="d MMM yyyy"
                      placeholderText="To"
                      // contentSelected={props.formik.values.dueDate}
                      // infoImg={checked ? "yes" : null}
                      // onChange={(date: Date) => {
                      //   props.formik.setFieldValue("dueDate", date);
                      // }}
                      // name="dueDate"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="sliderbar-filter__footer">
        <Button
          style={{ fontSize: "14px", textTransform: "capitalize" }}
          variant="outlined"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default SlidebarFilter;
