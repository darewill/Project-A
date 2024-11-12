import React, { useState, useEffect } from "react";
import "../style/Home.css";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setFirstname(parsedUser.firstname);
      setLastname(parsedUser.lastname);
      setEmail(parsedUser.email);
      setUsername(parsedUser.username);
    }
  }, []);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className=''>
      <div className="home-wrapper flex">
        <div className="home-left m-[20px] bg-[#f3f3f3] p-[20px] rounded-lg">
          <Card className="flex flex-col">
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="home-right bg-[#f3f3f3] w-[500px] rounded-lg m-[20px] justify-center items-center flex flex-col">
          <h1 className="text-[30px] font-semibold  text-[#595959] mb-[10px]">
            Welcome {firstname}
          </h1>
          <p className="text-[25px] font-semibold  text-[#595959] w-[400px]">
            This is your admin panel, here you can have detailed information
            about your company!
          </p>
        </div>
      </div>

      <div className="home-mid bg-[#f3f3f3] rounded-lg w-[50%] h-[51%] items-start justify-center my-[30px] mx-auto ">
        <div className="mid-top flex justify-center">
        <img src='https://img.goodfon.com/original/1728x972/1/2b/eystrahorn-beach-iceland-more-bereg.jpg' className='h-[200px] w-[100%] rounded-t-xl'/>
        <Avatar className='h-[150px] w-[150px] absolute mt-[100px] rounded-full'>
          <AvatarImage src="https://github.com/shadcn.png"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        <div className="mid-btm mt-[55px] text-center">
          <p className='text-[#05bc08] font-bold'>ADMIN</p>
          <h1 className='text-[#7c7c7c] italic text-[18px]'>@{username}</h1>
        <h1 className='font-semibold'>{email}</h1>
        <h1 className='font-semibold'>{firstname} {lastname}</h1>
        </div>
        
      </div>
    </div>
  );
}
