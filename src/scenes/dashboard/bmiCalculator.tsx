
import Page1 from '../../assets/Page1';
import Group8 from "../../assets/Group8";
import Frame from "../../assets/Frame";
import Frame1 from "../../assets/Frame1";
import Frame2 from "../../assets/Frame2";
import Frame3 from "../../assets/Frame3";


BMI.defaultProps = {
    style: {},
  };
  
  interface BMIProps {
    style: Object;
  }
  

export default function BMI(props: BMIProps) {
    return (
    <>
    <div
      className={`relative w-[562px] h-[1026px] font-['Mulish']`}
      style={props.style}
    >
      <div
        className="inset-0 absolute border-solid border rounded-tl-[40px] rounded-bl-[40px] w-[560px] bg-[rgba(48,48,48,1)] border-[rgba(241,241,241,1)]"
       />
      <div
        className="absolute gap-2.5 inline-flex items-start rounded-lg p-2.5 text-white text-left font-normal w-[211px] left-[7.14%] right-[55.18%] top-[49.02%] bottom-[47.27%] bg-[rgba(94,94,94,1)]"
      >
        <p className="text-sm m-0 leading-[normal]">
          Inverted Triangle Body Shape
        </p>
      </div>
      <Page1 />
      <Group8 />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(196,_196,_196,_1)_inset] [box-shadow-width:1px] px-8 py-6 absolute bg-white gap-2 inline-flex flex-col justify-center items-center rounded-xl text-left w-[145px] left-[7.14%] right-[66.96%] top-[61.82%] bottom-[27.83%]"
      >
        <p
          className="text-base font-bold m-0 leading-[normal] text-[rgba(95,95,95,1)]"
        >
          Chest (in)
        </p>
        <div className="gap-2 flex items-center text-black font-normal">
          <p className="text-2xl m-0 leading-[normal]">44.5</p>
          <Frame />
        </div>
      </div>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(196,_196,_196,_1)_inset] [box-shadow-width:1px] px-8 py-6 absolute bg-white gap-2 inline-flex flex-col justify-center items-center rounded-xl text-left w-[145px] left-[7.14%] right-[66.96%] top-[74.12%] bottom-[15.53%]"
      >
        <p
          className="text-base font-bold m-0 leading-[normal] text-[rgba(95,95,95,1)]"
        >
          Waist (in)
        </p>
        <div className="gap-2 flex items-center text-black font-normal">
          <p className="text-2xl m-0 leading-[normal]">34</p>
          <Frame1 />
        </div>
      </div>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(196,_196,_196,_1)_inset] [box-shadow-width:1px] px-8 py-6 absolute bg-white gap-2 inline-flex flex-col justify-center items-center rounded-xl text-left w-[145px] left-[7.14%] right-[66.96%] top-[86.43%] bottom-[3.22%]"
      >
        <p
          className="text-base font-bold m-0 leading-[normal] text-[rgba(95,95,95,1)]"
        >
          Hip (in)
        </p>
        <div className="gap-2 flex items-center text-black font-normal">
          <p className="text-2xl m-0 leading-[normal]">42.5</p>
          <Frame2 />
        </div>
      </div>
      <div
        className="absolute text-left w-[560px] left-[-168.21%] right-[168.21%] top-[-8.59%] bottom-[8.59%]"
      >
        <div
          className="absolute rounded-xl w-[283px] left-[212.32%] right-[-162.86%] top-[21.88%] bottom-[60.16%] bg-[rgba(74,73,73,1)]"
         />
        <p
          className="absolute text-2xl font-normal text-white inline m-0 left-[215.89%] right-[-124.64%] top-[27.73%] bottom-[69.34%] leading-[normal]"
        >
          24.9
        </p>
        <p
          className="absolute text-base font-normal text-white inline m-0 left-[215.89%] right-[-146.07%] top-[23.83%] bottom-[74.22%] leading-[normal]"
        >
          Body Mass Index (BMI)
        </p>
        <div
          className="px-2.5 py-1.5 absolute gap-2.5 inline-flex items-start rounded-lg text-black font-normal w-[101px] left-[241.07%] right-[-159.11%] top-[27.93%] bottom-[69.43%] bg-[rgba(214,255,221,1)]"
        >
          <p className="text-xs m-0 leading-[normal]">You’re Healthy</p>
        </div>
        <div
          className="absolute text-white font-bold w-[246px] left-[215.89%] right-[-159.82%] top-[33.4%] bottom-[61.82%]"
        >
          <p
            className="left-0 bottom-0 absolute text-xs inline m-0 right-[93.9%] top-[69.39%] leading-[normal]"
          >
            15
          </p>
          <p
            className="bottom-0 absolute text-xs inline m-0 left-[22.36%] right-[67.48%] top-[69.39%] leading-[normal]"
          >
            18.5
          </p>
          <p
            className="bottom-0 absolute text-xs inline m-0 left-[47.56%] right-[46.34%] top-[69.39%] leading-[normal]"
          >
            25
          </p>
          <p
            className="bottom-0 absolute text-xs inline m-0 left-[69.11%] right-[24.8%] top-[69.39%] leading-[normal]"
          >
            30
          </p>
          <p
            className="right-0 bottom-0 absolute text-xs inline m-0 left-[93.9%] top-[69.39%] leading-[normal]"
          >
            40
          </p>
          <div
            className="left-0 absolute w-[243px] right-[1.22%] top-[24.49%] bottom-[46.94%] [background-image:linear-gradient(90deg,_rgba(181,_212,_241,_1),_rgba(129,_229,_219,_1)_38%,_rgba(232,_210,_132,_1)_70%,_rgba(226,_121,_142,_1))] rounded-[21px]"
           />
          <div
            className="w-1.5 top-0 absolute border-solid border border-white left-[43.9%] right-[53.66%] bottom-[87.76%] bg-[rgba(209,101,100,1)] rounded-[19px]"
           />
        </div>
      </div>
      <div
        className="absolute text-left font-normal w-[187px] left-[7.14%] right-[59.46%] top-[13.28%] bottom-[78.71%] text-[rgba(39,41,39,1)]"
      >
        <div
          className="inset-0 absolute rounded-xl w-[187px] bg-[rgba(248,222,189,1)]"
         />
        <p
          className="absolute text-base inline m-0 left-[10.7%] right-[62.57%] top-[51.22%] bottom-[24.39%] leading-[normal]"
        >
          Height
        </p>
        <p
          className="absolute text-base inline m-0 left-[48.66%] right-[21.93%] top-[51.22%] bottom-[24.39%] leading-[normal]"
        >
          170 cm
        </p>
        <div
          className="absolute w-[98px] left-[43.85%] right-[3.74%] top-[19.51%] bottom-[53.66%]"
        >
          <div
            className="w-0.5 left-0 top-0 absolute right-[97.96%] bottom-[54.55%] bg-[rgba(40,40,40,0.28)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[12.24%] right-[85.71%] bottom-[54.55%] bg-[rgba(40,40,40,0.4)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[24.49%] right-[73.47%] bottom-[54.55%] bg-[rgba(40,40,40,0.7)] rounded-[25px]"
           />
          <div
            className="inset-y-0 w-0.5 absolute left-[36.73%] right-[61.22%] bg-[rgba(209,101,100,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[48.98%] right-[48.98%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[61.22%] right-[36.73%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[73.47%] right-[24.49%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[85.71%] right-[12.24%] bottom-[54.55%] bg-[rgba(40,40,40,0.6)] rounded-[25px]"
           />
          <div
            className="w-0.5 right-0 top-0 absolute left-[97.96%] bottom-[54.55%] bg-[rgba(40,40,40,0.3)] rounded-[25px]"
           />
        </div>
      </div>
      <div
        className="absolute font-normal w-[187px] left-[7.14%] right-[59.46%] top-[23.24%] bottom-[68.75%] text-[rgba(39,41,39,1)]"
      >
        <div
          className="inset-0 absolute rounded-xl w-[187px] bg-[rgba(208,251,255,1)]"
         />
        <p
          className="absolute text-base text-left inline m-0 left-[10.7%] right-[59.89%] top-[51.22%] bottom-[24.39%] leading-[normal]"
        >
          Weight
        </p>
        <p
          className="absolute text-base text-center inline m-0 left-[52.41%] right-[25.13%] top-[51.22%] bottom-[24.39%] leading-[normal]"
        >
          72 kg
        </p>
        <div
          className="absolute w-[98px] left-[43.85%] right-[3.74%] top-[19.51%] bottom-[53.66%]"
        >
          <div
            className="w-0.5 left-0 top-0 absolute right-[97.96%] bottom-[54.55%] bg-[rgba(40,40,40,0.28)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[12.24%] right-[85.71%] bottom-[54.55%] bg-[rgba(40,40,40,0.4)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[24.49%] right-[73.47%] bottom-[54.55%] bg-[rgba(40,40,40,0.7)] rounded-[25px]"
           />
          <div
            className="inset-y-0 w-0.5 absolute left-[36.73%] right-[61.22%] bg-[rgba(209,101,100,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[48.98%] right-[48.98%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[61.22%] right-[36.73%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[73.47%] right-[24.49%] bottom-[54.55%] bg-[rgba(40,40,40,1)] rounded-[25px]"
           />
          <div
            className="w-0.5 top-0 absolute left-[85.71%] right-[12.24%] bottom-[54.55%] bg-[rgba(40,40,40,0.6)] rounded-[25px]"
           />
          <div
            className="w-0.5 right-0 top-0 absolute left-[97.96%] bottom-[54.55%] bg-[rgba(40,40,40,0.3)] rounded-[25px]"
           />
        </div>
      </div>
      <p
        className="absolute font-normal text-left text-white inline m-0 left-[7.14%] right-[66.25%] top-[5.76%] bottom-[91.5%] text-[22px] leading-[normal]"
      >
        BMI Calculator
      </p>
      <p
        className="absolute font-normal text-left text-white inline m-0 left-[7.14%] right-[55.54%] top-[40.82%] bottom-[56.45%] text-[22px] leading-[normal]"
      >
        Body Measurements
      </p>
      <p
        className="absolute text-base font-bold text-left inline m-0 left-[7.14%] right-[58.57%] top-[44.73%] bottom-[53.32%] leading-[normal] text-[rgba(202,202,202,1)]"
      >
        Last checked 2 Days Ago
      </p>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(202,_202,_202,_1)_inset] [box-shadow-width:1px] px-6 py-3.5 absolute gap-2.5 inline-flex justify-center items-center rounded-xl text-left font-normal w-[157px] left-[66.43%] right-[5.54%] top-[4.88%] bottom-[90.43%] text-[rgba(202,202,202,1)]"
      >
        <p className="text-base m-0 leading-[normal]">Last Week</p>
        <Frame3 />
      </div>
      <div
        className="absolute left-[5.36%] right-[5.36%] w-[500px] top-[36.82%] bottom-[63.18%] outline outline-1 outline-[rgba(79,78,78,1)]"
       />
    </div>
    </>
  );
}
