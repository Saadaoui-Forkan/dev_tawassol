import React from 'react'
import { useSelector } from 'react-redux'

function Alert() {
    const { alerts, removeAlert } = useSelector(state => state.alert)
    console.log(alerts)
  return (
    <div className="container">
      {alerts.length > 0 && 
        alerts?.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            {alert.msg}
          </div>
        ))}
    </div>
  );
}

export default Alert