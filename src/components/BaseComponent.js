/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function BaseComponent({ pxVal, remVal, tlVal, rootPx, pxInput }) {
  const [remValue, setRemValue] = useState("");
  const [tlValue, setTlValue] = useState("");
  useEffect(() => {
    let mounted = true;
    if (pxInput && pxInput !== "" && rootPx && rootPx !== "") {
      const pxInputNum = +pxInput;
      const rootPxNum = +rootPx;
      const pxToRem = parseFloat(pxInputNum / rootPxNum).toFixed(3);
      setRemValue(pxToRem);
    }
    return () => {
      mounted = false;
    };
  }, [rootPx, pxInput]);

  useEffect(() => {
    let mounted = true;
    if (remValue === "0.000") {
      setTlValue("p-0");
    } else if (remValue === "0.063") {
      setTlValue("p-px");
    } else if (remValue === "0.125") {
      setTlValue("p-0.5");
    } else if (remValue === "0.250") {
      setTlValue("p-1");
    } else if (remValue === "0.375") {
      setTlValue("p-1.5");
    } else if (remValue === "0.500") {
      setTlValue("p-2");
    } else if (remValue === "0.625") {
      setTlValue("p-2.5");
    } else if (remValue === "0.750") {
      setTlValue("p-3");
    } else if (remValue === "0.875") {
      setTlValue("p-3.5");
    } else if (remValue === "1.000") {
      setTlValue("p-4");
    } else if (remValue === "1.250") {
      setTlValue("p-5");
    } else if (remValue === "1.500") {
      setTlValue("p-6");
    } else if (remValue === "1.750") {
      setTlValue("p-7");
    } else if (remValue === "2.000") {
      setTlValue("p-8");
    } else if (remValue === "2.250") {
      setTlValue("p-9");
    } else if (remValue === "2.500") {
      setTlValue("p-10");
    } else if (remValue === "2.750") {
      setTlValue("p-11");
    } else if (remValue === "3.000") {
      setTlValue("p-12");
    } else if (remValue === "4.000") {
      setTlValue("p-16");
    } else if (remValue === "5.000") {
      setTlValue("p-20");
    } else if (remValue === "6.000") {
      setTlValue("p-24");
    } else if (remValue === "7.000") {
      setTlValue("p-28");
    } else if (remValue === "8.000") {
      setTlValue("p-32");
    } else if (remValue === "9.000") {
      setTlValue("p-36");
    } else if (remValue === "10.000") {
      setTlValue("p-40");
    } else if (remValue === "11.000") {
      setTlValue("p-44");
    } else if (remValue === "12.000") {
      setTlValue("p-48");
    } else if (remValue === "13.000") {
      setTlValue("p-52");
    } else if (remValue === "14.000") {
      setTlValue("p-56");
    } else if (remValue === "15.000") {
      setTlValue("p-60");
    } else if (remValue === "16.000") {
      setTlValue("p-64");
    } else if (remValue === "18.000") {
      setTlValue("p-72");
    } else if (remValue === "20.000") {
      setTlValue("p-80");
    } else if (remValue === "24.000") {
      setTlValue("p-96");
    } else {
      setTlValue("");
    }

    return () => {
      mounted = false;
    };
  }, [pxVal, remVal, tlVal, rootPx, pxInput, remValue]);

  return (
    <div className="flex">
      <div className="w-full flex md:w-1/3">
        <div className="px-2 font-extrabold">{`${pxInput}`}</div>
        <div>px</div>
      </div>
      <div className="w-full flex md:w-1/3">
        <div className="px-2 font-extrabold">{`${remValue}`}</div>
        <div>rem</div>
      </div>
      <div className="w-full flex md:w-1/3">
        <div className="px-2 font-extrabold">{`${tlValue}`}</div>
      </div>
    </div>
  );
}

export default BaseComponent;
