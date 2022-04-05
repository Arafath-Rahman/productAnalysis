import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container border-2 w-2/3 mx-auto rounded-lg p-5 my-5 mb-5">
      <h1 className="text-center text-3xl font-bold hover:underline text-emerald-400 mb-8 mt-5">
        Blogs
      </h1>
      <div className="border-2 mx-auto rounded-lg p-2">
        <h2 className="text-3xl text-red-500 font-bold my-3">
          What is Context API?
        </h2>
        <p className=" font-medium ">
          <span className="text-emerald-500">Answer: </span> Context API is a
          feature of React.js that helps us to pass data to any components
          regardless their hierarchy (Parent-Child relation). It is an
          alternative to 'Props Drilling' which is a real problem if we try to
          pass data from ancestors to their children. In context API we just
          declare the context in the root component of our preference and then
          we wrap the components with context Provider. Then we can access the
          context data anywhere in the children component without passing them
          through props. It's easy to use and saves lot of time and helps not writing same code again and again.
        </p>
      </div>
      <hr className="my-3" />
      <div className="border-2 mx-auto rounded-lg p-2">
        <h2 className="text-3xl text-red-500 font-bold my-3">
          What is Semantic Tag?
        </h2>
        <p className=" font-medium ">
          <span className="text-emerald-500">Answer: </span> Semantic tags are HTML tags that have a proper name related to it's job. Some semantic tags in HTML are: header, aside, footer, article, section, nav etc. If we use this tags in our code its make life easier for the developers as well as for the browsers to understand what's written in the code. A simple example is that, if we use article tag in our code it would be more readable for us and the machine itself.Semantic tags make the products user-friendly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
