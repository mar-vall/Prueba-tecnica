"use client";

import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const registerForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User name is required"),
      email: Yup.string()
        .email("Correo electrónico no válido")
        .required("El correo electrónico es obligatorio"),
      phone: Yup.number().required("Phone number is required"),
      password: Yup.string().required("La contraseña es obligatoria"),
      confirmPassword: Yup.string().required("Confirm your password"),
    }),
    onSubmit: (values) => {
      // Lógica de inicio de sesión
      console.log("Datos del formulario:", values);
    },
  });
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full p-10 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <Link href="#" className="">
          Volver
        </Link>
        <h4 className="text-3xl font-bold text-blue-800 text-center pt-10">
          Create Account
        </h4>
        <p className="text-md text-center font-semibold text-gray-500">
          Create a new account
        </p>
        <form
          className="space-y-4 md:space-y-6 pt-10"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-sm text-red-600">
                {formik.errors.username}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red-600">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+591 77649753"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-sm text-red-600">{formik.errors.phone}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-sm text-red-600">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="******"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-sm text-red-600">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-700 text-white p-3"
          >
            CREATE ACCOUNT
          </button>
          <p className="text-sm text-center py-3 font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default registerForm;
