import { Helmet } from "react-helmet";
import { backendURL, url } from "../constant";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const onSubmit = async (values, actions) => {
    console.log("submitted !");

    const res = await axios.post(`${backendURL}/api/signup`, {
      username: values.username,
      email: values.email,
      password: values.password,
    });

    if(res){

      // console.log(res);
      toast.success("signup success")
      
      actions.resetForm();
    }
  
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      //   confirmpassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: onSubmit,
  });

  //   console.log(formik.values);
  return (
    <section className="py:8 sm:py-12 lg:py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lookscout | Signup</title>
        <link rel="canonical" href={`http:${url}/signup`} />
      </Helmet>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="container mx-auto my-4 flex flex-col gap-2  border px-4 py-12 shadow-lg lg:w-[33%]"
      >
        <label htmlFor="username">Username</label>
        <input
          className="border"
          type="text"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.username && formik.touched.username && (
          <p className="text-red-500">{formik.errors.username}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          className="border"
          type="text"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          className="border"
          type="text"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="btn w-[88px] rounded-md bg-primary text-white"
        >
          {formik.isSubmitting ? "Signup" : "Signup"}
        </button>
      </form>
    </section>
  );
};

export default Signup;
