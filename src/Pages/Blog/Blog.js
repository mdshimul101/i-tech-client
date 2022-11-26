import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="mt-12 font-bold text-3xl text-center text-sky-500">
        Blogs
      </h1>
      <div className="w-7/12 mx-auto mt-12 mb-40">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              React state management is a process for managing the data that
              React components need in order to render themselves. This data is
              typically stored in the component's state object. When the state
              object changes, the component will re-render itself. React state
              management is basically half of a React app.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              <span className="text-sky-500 font-semibold">Angular</span> is the
              most mature of the frameworks, has good backing in terms of
              contributors and is a complete package. However, the learning
              curve is steep and concepts of development in Angular may put off
              new developers. Angular is a good choice for companies with large
              teams and developers who already use TypeScript. <br />
              <br />
              <span className="text-sky-500 font-semibold">React </span>
              is just old enough to be mature and has a huge number of
              contributions from the community. It has gained widespread
              acceptance. The job market for React is really good, and the
              future for this framework looks bright. React looks like a good
              choice for someone getting started with front-end JavaScript
              frameworks, startups, and developers who like some flexibility.
              The ability to integrate with other frameworks seamlessly gives it
              a great advantage for those who would like some flexibility in
              their code. <br />
              <br />
              <span className="text-sky-500 font-semibold">Vue </span> is newest
              to the arena, without the backing of a major company. However, it
              has done really well in the last few years to come out as a strong
              competitor for Angular and React, and especially so with the
              release of Vue 3.0. This is perhaps playing a role with a lot of
              Chinese giants like Alibaba and Baidu picking Vue as their primary
              front-end JavaScript framework. Vue should be your choice if you
              prefer simplicity, but also like flexibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
