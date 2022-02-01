import { useMediaQuery } from "react-responsive";
import MainHeading from "../reusable/MainHeading";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Hisotry = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const LEVEL = "chef";
  const RECIPE_COUNT = "100";

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col align-center justify-center mt-12">
          <p className="font-main font-bold text-2xl mb-8">
            You're at {LEVEL} level
          </p>
          <h3 className="mb-3 text-xl">There are</h3>
          <MainHeading text={RECIPE_COUNT} color="text-mainHeading" />
          <h3 className="mt-3 text-xl">recipes you know how to cook!</h3>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-16 px-32 py-24">
          <div className="text-left">
            <p className="font-main font-bold text-2xl mb-8">
              You're at {LEVEL} level
            </p>
            <h3 className="mb-3 text-xl">There are</h3>
            <MainHeading text={RECIPE_COUNT} color="text-mainHeading" />
            <h3 className="mt-3 text-xl">recipes you know how to cook!</h3>
          </div>
          <div className="">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart width={500} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#A8763E"
                  fill="#F6F1EC"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Hisotry;
