import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[95%] mx-auto'>

            {/* Question 1 */}
            <div className='my-4'>
                <h1 className='text-2xl my-3'>1. What are the different ways to manage a state in a React application?</h1>

                <div>
                    <h1>There are many ways to manage react state. Such as: Local state,
                        Global state,
                        Server state,
                        URL state,  Control State, Session State. Some Details is given value:-</h1><br />

                    <p className='text-xl font-bold'>Session State</p> <br />
                    <p>
                        So far, we have discussed the following states:

                        1. Data/ Communication State- Predictable shaped states which are required application-wide

                        2. Control State- Unpredictable shaped states which are not required throughout

                        Now lets discuss a state which is required to be available throughout the application but has a lesser well-defined shape.

                        Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular users preferences.

                        While Session state can store similar patterned components like Control state, there is a thick difference between both the information stored. For example, you may have a part of a Control state information that represents parts of a tree view, you can find kind of similar data in the Session state, but it will definitely be different from the Control state.

                        Session states can only be read when a component is mounted, which means that you store a copy of the information already present in the Control state. It stores personal preferences based on the users choices to depict the data.
                    </p>

                </div>

                <p className='text-xl font-bold'>Location State</p> <br />
                <p>
                    Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.

                    Unlike Data and Communication state, which follow a particular pattern or a shape to store information, location state instead stores information in a simple string like structure. However, one of the most interesting things about location states is that it typically stores URLs in the forms of string-like structures even when they dont actually represent strings.

                    URLs represent a hierarchy of components, overlaid on one top of the other. One can build a location tree using different URLs that represent different parts of your application.
                </p>


            </div>
            {/* question 2 */}
            <div>
                <h1 className='text-2xl my-3'>2. How does prototypical inheritance work?</h1>
                <div>
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </div>
            </div>

            {/* question 3 */}
            <div className='my-9'>
                <h1 className='text-2xl my-3'>3. React vs. Angular vs. Vue?</h1>
                <div>
                    <span className='text-xl font-bold'>Angular</span>, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name - AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. <br />


                    <span className='text-xl font-bold'>Vue</span>, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesnt have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                    Further reading: Vue.js Tutorial for Beginner Developers <br />

                    <span className='text-xl font-bold'>React</span>, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                </div>

            </div>


            {/* Question 4 */}
            <div className='my-5'>
                <h1 className='my-4 text-3xl'>4. What is a unit test? Why should we write unit tests?</h1>
                <div>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </div>
            </div>
        </div>
    );
};

export default Blogs;