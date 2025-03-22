import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // เคลียร์ interval ตอน component หายไป
  }, []);

  // คำนวณองศาการหมุนของแต่ละเข็ม
  const hourAngle = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteAngle = time.getMinutes() * 6;
  const secondAngle = time.getSeconds() * 6;

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "6px solid black",
        borderRadius: "50%",
        position: "relative",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* เข็มชั่วโมง */}
      <div
        style={{
          width: "8px",
          height: "120px",
          backgroundColor: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "bottom center",
          transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
        }}
      ></div>

      {/* เข็มนาที */}
      <div
        style={{
          width: "6px",
          height: "150px",
          backgroundColor: "gray",
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "bottom center",
          transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
        }}
      ></div>

      {/* เข็มวินาที */}
      <div
        style={{
          width: "4px",
          height: "170px",
          backgroundColor: "red",
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "bottom center",
          transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
        }}
      ></div>

      {/* จุดตรงกลาง */}
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default Clock;
