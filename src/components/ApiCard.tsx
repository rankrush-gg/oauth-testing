"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  title: string;
  templateUrl: string;
  testData: string[];
};

function ApiCard({ title, templateUrl, testData }: Props) {
  const [value, setValue] = useState("");
  const [data, setData] = useState("hello world");

  const handleClick = () => {};

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  // Extracting the placeholder and template parts only once using useMemo
  const { placeholder, templateParts } = useMemo(() => {
    const match = templateUrl.match(/\{\{(.*?)\}\}/);
    return {
      placeholder: match ? match[1] : "",
      templateParts: templateUrl.split(/\{\{.*?\}\}/),
    };
  }, [templateUrl]);

  // Function to format the displayed URL
  const displayUrl = useMemo(
    () => (
      <>
        {templateParts[0]}
        <span className="text-orange-400">{value || `{{${placeholder}}}`}</span>
        {templateParts[1]}
      </>
    ),
    [templateParts, value, placeholder]
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center space-x-2">
          <CardTitle>{title}</CardTitle>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-5 w-5 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Try: {testData.join(", ")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>{displayUrl}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder={`Enter ${placeholder}`}
            value={value}
            onChange={handleChange}
          />
          <Button onClick={handleClick}>
            Send <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {data && (
          <pre className=" flex items-center space-x-4 rounded-md border p-4 text-xs">
            {data}
          </pre>
        )}
      </CardContent>
    </Card>
  );
}

export default ApiCard;
