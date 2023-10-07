import React from "react";

const NewsCart = () => {
  return (
    <div>
      <section className="p-4 lg:p-8  text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://gdb.rferl.org/01000000-0aff-0242-ce64-08dba9f3e1e8_w1023_r1_s.jpg"
              alt=""
              className="h-80 bg-gray-500 aspect-video w-1/4"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                The United States experienced the highest number of disasters
                with billions of dollars in damage.
              </h3>
              <p className="my-6 text-gray-400">
                The 2023 list of disasters includes 18 hurricanes, two floods, a
                tropical cyclone, a wildfire and a winter storm. Collectively,
                they killed at least 253 people and caused more than $57.6
                billion in damage.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
            <img
              className="h-80 bg-gray-500 aspect-video w-1/4"
              src="https://i.gifer.com/Yg6D.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://gdb.rferl.org/5279ba86-8086-4a86-add0-71b778a3092e_cx0_cy8_cw0_w1023_r1_s.jpg"
              alt=""
              className="h-80 bg-gray-500 aspect-video w-1/4"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                "Israel is at war." Hamas attack in the south of the country
              </h3>
              <p className="my-6 text-gray-400">
                A state of war has been officially declared in Israel and a
                state of emergency has been declared. Since the morning of
                October 7, the Palestinian group Hamas, which controls the Gaza
                Strip, has been massively shelling Israel. Dozens of Israeli
                soldiers and civilians are killed and taken hostage, and
                hundreds are wounded.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
            <img
              className="h-80 bg-gray-500 aspect-video w-1/4"
              src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80 bg-gray-500 aspect-video w-1/4"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
            <img
              className="h-80 bg-gray-500 aspect-video w-1/4"
              src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCart;
