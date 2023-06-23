import { getUser } from "@/lib/getUser";
import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: {
    word: string;
  };
}
export async function generateMetadata({ params }: Props) {
  const data = await getUser(params.word);
  if (!data) {
    return {
      title: "not fournd",
    };
  } else {
    return {
      title: data.name,
    };
  }
}
const Result = async ({ params: { word } }: Props) => {
  const data = await getUser(word);
  if (!data) return notFound();

  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-40px)] flex-col">
      <div className="bg-gray-700 rounded">
        <p className="text-white w-fit  px-2 py-1 ">userName- {data.name}</p>
        <p className="text-white w-fit  px-2 py-1 ">userID- {data.id}</p>
      </div>
    </div>
  );
};

export default Result;
