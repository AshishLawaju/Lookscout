import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { backendURL, url } from "../constant";
import { contactSchema } from "../schemas";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const Contact = () => {
  const inputClass =
    "bg-[#2c3444] rounded-md px-4 py-2 border-none outline-none";
  const [agree, setAgree] = useState(false);
  const onSubmit = async (values, actions) => {
  const res = await axios.post(
      `${backendURL}/api/sendmessage`,

      {
        name: values.email,
        email: values.email,
        phone: values.phone,
        getInTouch: values.getInTouch,
        message: values.message,
      },
    );

    if(res){
      toast.success("Message sent")
    }
/*     console.log("message submit");
    console.log({res}); */
    actions.resetForm();

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      getInTouch: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: onSubmit,
  });
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lookscout | Contact</title>
        <link rel="canonical" href={`http:${url}/contact`} />
      </Helmet>
      <div className="bg-[#151b28] py-16 text-white">
        <div className="container">
          <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-3xl ">
            Get In Touch With Us
          </h2>
          <p className="mx-auto mt-4 text-center text-stale lg:w-[60%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>

          <div className="mt-12 bg-[#1c2534]">
            <form
              className="flex flex-col gap-4 p-8 text-sm sm:gap-6 "
              onSubmit={formik.handleSubmit}
            >
              <div className="flex w-full  flex-col gap-6 sm:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="name">First Name</label>
                  <input
                    className={`${inputClass}`}
                    placeholder="Input"
                    type="text"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500">{formik.errors.name}</p>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="email">Email address</label>
                  <input
                    className={`${inputClass}`}
                    placeholder="Input"
                    type="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6  sm:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    placeholder="+000"
                    className={`${inputClass}`}
                    type="number"
                    id="phone"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p className="text-red-500">{formik.errors.phone}</p>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="get">Get in Touch With Us</label>
                  <select
                    className={`${inputClass}`}
                    name=""
                    id="getInTouch"
                    value={formik.values.getInTouch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Dropdown</option>
                    <option value="option1">option 1</option>
                    <option value="option2">option 2</option>
                    <option value="option3">option 3</option>
                  </select>
                  {formik.errors.getInTouch && formik.touched.getInTouch && (
                    <p className="text-red-500">{formik.errors.getInTouch}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Hi! We are Lookscout..."
                  className={`${inputClass} h-[147px]`}
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message && formik.touched.message && (
                  <p className="text-red-500">{formik.errors.message}</p>
                )}
              </div>

              <div className="flex  items-center gap-3">
                <input
                  type="checkbox"
                  onClick={() => setAgree((pre) => !pre)}
                  
                />
                <p>I agree with Lookscout Privacy Policy</p>
              </div>

              <button
                className="btn w-[88px] rounded-md bg-primary   "
                disabled={!agree}
                type="submit"
              
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
