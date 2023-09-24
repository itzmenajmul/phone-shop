import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  // console.log(params)
  const phones = useLoaderData();
  // console.log(phones)
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id == id);
    // console.log(findPhone)

    setPhone(findPhone);
  }, [id, phones]);

  //   console.log(phone);

  return (
    <div>
      <PhoneCard phone={phone} />
    </div>
  );
};

export default Phone;
