import axios from "axios";
import { useEffect, useState } from "react";
import { backendURL } from "../constant";

const Message = () => {
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendURL}/api/getmessage`, {
        headers: { Authorization: token },
      })
      .then((res) => setMessage(res.data.data))
      .catch((err) => console.log(err));
  }, [token]);
  console.log(message);
  return (
    <div className="container py-8 sm:py-16 lg:py-32">
      <table className="w-full table-auto border-collapse border text-center">
        <thead className="border ">
          <td className="border">Name</td>
          <td className="border">email</td>
          <td className="border">phone</td>
          <td className="border">Get In Touch</td>
          <td className="border">message</td>
        </thead>

        <tbody>
          {message.map((el) => (
            <tr key={el.name} className="border ">
              <td className="p-1 border text-center">{el.name}</td>
              <td className="p-1 border text-center">{el.email}</td>
              <td className="p-1 border text-center">{el.phone}</td>
              <td className="p-1 border text-center">{el.getInTouch}</td>
              <td className="p-1 border text-center">{el.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Message;
