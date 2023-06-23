import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <Image
      className="rounded-full"
      src={"/images/img.jpg"}
      width={80}
      height={80}
      alt=""
      priority
      //   loading="lazy"
    />
  );
};

export default Profile;
