import Head from "next/head";
import React from "react";

const PageHead = () => {
  const description =
    "Cristover Wurangian: Fullstack Developer | Expert in Mobile Development with Proficiency in Xamarin.Forms, MAUI, C#, Flutter, & Dart. Skilled in Backend Development using ASP.Net, C#, python and More.";
  const imageUrl =
    "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F36da2402-2363-450b-bec3-0d8e880e06a7%2Ff184718d-553c-419e-ad3f-559c8f7ff737%2FIMG_1605.jpg?table=block&id=76abf0cc-7212-465f-9ddd-6936a6e3aa96&cache=v2";
  const title = "Cristover Wurangian | Fullstack Developer Portfolio";
  return (
    <Head>
      {/* common tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />

      {/* title */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* Image */}
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:image" content={imageUrl} />
      </>
    </Head>
  );
};

export default PageHead;
