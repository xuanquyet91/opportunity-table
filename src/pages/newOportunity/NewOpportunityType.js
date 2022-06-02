import React, { useEffect, useState } from "react";
import { Button } from "../../mui";
import { dataOpportunityType } from "../../data";
import productApi from "../../api/productApi";

const NewOpportunityType = (props) => {
  const { stateGuidance, setStateGuidance, stateExpand, setStateExpand } =
    props;
  const [productList, setProductList] = useState([]);
  // fetch API product
  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      // const params = { page, limit };
      const response = await productApi.getAll();
      setProductList(response);
      // setIsloading(isLoading);
      // console.log("success", response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  const handleCollapseOppertunityType = () => {
    if (stateExpand === "3") {
      setStateExpand("1");
    } else if (stateExpand === "4") {
      setStateExpand("2");
    }
  };
  return (
    <div
      className="new-opportunity-type"
      style={{ left: stateGuidance ? "780px" : "580px" }}
    >
      <div className="new-opportunity-type__header">
        <div>We can help you with...</div>
        <div>
          <Button
            className="button-business"
            variant="outlined"
            color="primary"
            onClick={handleCollapseOppertunityType}
          >
            Back
          </Button>
        </div>
      </div>
      <div className="new-opportunity-type__body">
        {dataOpportunityType?.map((data) => (
          <div className="new-opportunity-type__body__row">
            <div className="new-opportunity-type__body__title">{data.name}</div>
            <div className="new-opportunity-type__body__content">
              <div>
                <img src={data.img} />
              </div>
              <div style={{ textAlign: "justify" }}>{data.desc}</div>
              <div>
                <Button
                  className="button-business"
                  variant="contained"
                  color="primary"
                >
                  Select
                </Button>
                <Button
                  className="button-business"
                  variant="outlined"
                  color="primary"
                >
                  Learn More ...
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewOpportunityType;
