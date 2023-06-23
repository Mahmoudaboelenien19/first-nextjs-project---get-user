"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const [word, setWord] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${word}`);
    setWord("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[200px] h-full flex flex-nowrap  "
    >
      <input
        type="text"
        onChange={handleChange}
        className="w-5/6 outline-none  border-0 px-2 text-black rounded-s-md"
      />
      <button
        type="submit"
        className="w-1/6 flex justify-center align-middle rounded-e-md bg-green-400"
      >
        {" "}
        s
      </button>
    </form>
  );
};

export default Search;
