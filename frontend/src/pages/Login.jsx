import { Helmet } from "react-helmet";
import { backendURL, url } from "../constant";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    const res = await axios.post(`${backendURL}/api/login`, {
      email: values.email,
      password: values.password,
    }).catch(err=>console.log(err));

    if (res) {
      localStorage.setItem("token", "Bearer " + res.data.token);
      toast.success("login success");
    }else{
      toast.error("Invalid username or password");
    }
    navigate("/");
    actions.resetForm();
    

  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: onSubmit,
  });
  return (
    <section className="py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lookscout | Login</title>
        <link rel="canonical" href={`http:${url}/login`} />
      </Helmet>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="container mx-auto my-4 flex flex-col gap-2  border px-4 py-12 shadow-lg lg:w-[33%]"
      >
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
          className={`btn w-[88px] rounded-md  text-white ${formik.isSubmitting ? "bg-blue-300" : "bg-primary"}`}
        >
          {"Login"}
        </button>

        <p className="underline" onClick={()=>navigate('/adminlogin')}>login as admin</p>
      </form>
    </section>
  );
};

export default Login;
