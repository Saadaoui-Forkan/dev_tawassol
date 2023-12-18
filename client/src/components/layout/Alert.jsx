import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const { alerts } = useSelector((state) => state.alert);
  return (
    <div className="alert-wraper">
      {alerts?.length > 0 && (
        <div className="container">
          {alerts?.map((alert, index) => (
            <div key={index} className={`alert alert-${alert.type}`}>
              {alert.msg}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Alert;
