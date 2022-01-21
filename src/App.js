import classNames from "classnames";
import { useState } from "react";
import BaseComponent from "./components/BaseComponent";

function App() {
  const [rootPx, setRootPx] = useState("16");
  const [pxInput, setPxInput] = useState("1");
  const randomColor = [
    "bg-slate-100",
    "bg-red-100",
    "bg-slate-100",
    "bg-orange-100",
    "bg-slate-100",
    "bg-amber-100",
    "bg-slate-100",
    "bg-yellow-100",
    "bg-slate-100",
    "bg-lime-100",
    "bg-slate-100",
    "bg-green-100",
    "bg-slate-100",
    "bg-emerald-100",
    "bg-slate-100",
    "bg-teal-100",
    "bg-slate-100",
    "bg-cyan-100",
    "bg-slate-100",
    "bg-sky-100",
    "bg-slate-100",
    "bg-blue-100",
    "bg-slate-100",
    "bg-indigo-100",
    "bg-slate-100",
    "bg-violet-100",
    "bg-slate-100",
    "bg-purple-100",
    "bg-slate-100",
    "bg-fuchsia-100",
    "bg-slate-100",
    "bg-pink-100",
    "bg-slate-100",
    "bg-rose-100",
    "bg-slate-200",
    "bg-red-200",
    "bg-slate-200",
    "bg-orange-200",
    "bg-slate-200",
    "bg-amber-200",
    "bg-slate-200",
    "bg-yellow-200",
    "bg-slate-200",
    "bg-lime-200",
    "bg-slate-200",
    "bg-green-200",
    "bg-slate-200",
    "bg-emerald-200",
    "bg-slate-200",
    "bg-teal-200",
    "bg-slate-200",
    "bg-cyan-200",
    "bg-slate-200",
    "bg-sky-200",
    "bg-slate-200",
    "bg-blue-200",
    "bg-slate-200",
    "bg-indigo-200",
    "bg-slate-200",
    "bg-violet-200",
    "bg-slate-200",
    "bg-purple-200",
    "bg-slate-200",
    "bg-fuchsia-200",
    "bg-slate-200",
    "bg-pink-200",
    "bg-slate-200",
    "bg-rose-200",
    "bg-slate-300",
    "bg-red-300",
    "bg-slate-300",
    "bg-orange-300",
    "bg-slate-300",
    "bg-amber-300",
    "bg-slate-300",
    "bg-yellow-300",
    "bg-slate-300",
    "bg-lime-300",
    "bg-slate-300",
    "bg-green-300",
    "bg-slate-300",
    "bg-emerald-300",
    "bg-slate-300",
    "bg-teal-300",
    "bg-slate-300",
    "bg-cyan-300",
    "bg-slate-300",
    "bg-sky-300",
    "bg-slate-300",
    "bg-blue-300",
    "bg-slate-300",
    "bg-indigo-300",
    "bg-slate-300",
    "bg-violet-300",
    "bg-slate-300",
    "bg-purple-300",
    "bg-slate-300",
    "bg-fuchsia-300",
    "bg-slate-300",
    "bg-pink-300",
    "bg-slate-300",
    "bg-rose-300",
  ];
  const baseArr = [
    {
      pxVal: "px1",
      remVal: "rem1",
      tlVal: "tl1",
    },
  ];
  for (let i = 2; i < 51; i++) {
    baseArr.push({
      pxVal: "px" + i,
      remVal: "rem" + i,
      tlVal: "tl" + i,
    });
  }

  return (
    <div className="min-h-screen p-4">
      <label className="px-2 font-extrabold" htmlFor="base">
        Root pixel size
      </label>
      <input
        className="ring-2 ring-blue-500 rounded-lg p-1 m-2"
        type="text"
        name="base"
        id="base"
        value={rootPx}
        onChange={(e) => {
          setRootPx(e.target.value);
        }}
      />
      <div className="w-full">
        <label className="px-2 font-extrabold" htmlFor="pxVal">
          Please input pixel size to convert
        </label>
        <input
          className="ring-2 ring-blue-500 rounded-lg p-1 m-2"
          type="text"
          name="pxVal"
          id="pxVal"
          value={pxInput}
          onChange={(e) => {
            setPxInput(e.target.value);
          }}
        />
      </div>
      <div className="flex">
        <div className="w-full flex md:w-1/3">
          <div className="px-2 font-extrabold">Value in Pixel</div>
        </div>
        <div className="w-full flex md:w-1/3">
          <div className="px-2 font-extrabold">Value in rem</div>
        </div>
        <div className="w-full flex md:w-1/3">
          <div className="px-2 font-extrabold">Tailwind Padding</div>
        </div>
      </div>
      {baseArr.map((val, i) => {
        return (
          <div key={i} className={classNames(randomColor[i], "m-1 p-1")}>
            <BaseComponent
              pxVal={val.pxVal}
              remVal={val.remVal}
              tlVal={val.tlVal}
              rootPx={rootPx}
              pxInput={+pxInput + i}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
