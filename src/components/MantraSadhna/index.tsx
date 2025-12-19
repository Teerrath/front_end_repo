import "./MantraSadhna.css";
export default function MantraSadhna() {
  return (
    <div>
      <div className="relative">
        <div className="flex content-center justify-center items-center gap-4 mt-2 mantra-sandhna-heading">
          <img src="kundli/flower.svg" alt="flower" />{" "}
          <p className="[color:var(--rust-red)] font-semibold text-[36px]">
            {" "}
            Mantra Sadhna{" "}
          </p>
          <img src="kundli/flower.svg" alt="flower" />
        </div>
        <div className="mx-10 mantrasadhna-wrapper">
          <img className=" w-full" src="mantrasadhna/bg.svg" alt="" />
          <div className="content-area">
            <div className="flex ">
              <div className="mantrasadhna-inner-images">
                <img
                  src="mantrasadhna/ram.svg"
                  alt="ram"
                  className="ram-bg  w-[480px]"
                />
                <img
                  src="mantrasadhna/hanuman.svg"
                  alt="hanuman"
                  className="w-[626px] h-img"
                />
              </div>
              <div>
                <h5 className="text-right text-black content-area-heading">
                  Lorem Ipsum is simply dummy <br />
                  text of the printing and typesetting
                  <br />
                  industry.
                </h5>
                <p className="mt-5  content-area-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="text-right content-area-btn-wrapper mr-15 mt-5">
                  <button className="content-area-btn">
                    Start my Mantra Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mantrasadhna-bg">
        <div className="max-w-[80%] mx-auto">
          <div className="flex content-center justify-center items-center gap-4 mt-2">
            <img src="kundli/flower.svg" alt="flower" />{" "}
            <p className="[color:var(--rust-red)] font-semibold text-[36px]">
              {" "}
              Mantra Sadhna{" "}
            </p>
            <img src="kundli/flower.svg" alt="flower" />
          </div>
          <div className="flex mt-60 items-center justify-center">
            <div className=" ml-30">
              <img
                src="mantrasadhna/ram.svg"
                alt="ram"
                className="ram-bg  w-[420px]"
              />
              <img
                src="mantrasadhna/hanuman.svg"
                alt="hanuman"
                className="max-w-[620px] h-img"
              />
            </div>
            <div>
              <h5 className="font-bold text-[36px] text-right text-black">
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry.
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>Start my Mantra Journey</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
