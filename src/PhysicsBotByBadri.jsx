import { useEffect, useRef, useState } from "react";
import "./PhysicsBotByBadri.css"; // import CSS

export default function PhysicsBotByBadri() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light");
  const [messages, setMessages] = useState([
    { who: "bot", text: "Hello Buddy! I'm reactjsbot by badri — ask me reactjs  topics." },
  ]);
  const bottomRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Voice output for bot messages
  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.who === "bot") {
      const utterance = new SpeechSynthesisUtterance(lastMsg.text);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }, [messages]);

  function normalize(s) {
    return s.trim().toLowerCase();
  }

  function detectReply(userText) {
    const s = normalize(userText);

    const basicsofreactjs = [ "reactjs","basics of reactjs","reactjs basics","basics of react js"];
    const jsx = ["what is jsx","jsx in reactjs","define jsx","jsx"];
    const components = ["what is components","components in reactjs" ,"define components","components","components of reactjs"];
    const reacthooks = ["what is react hooks","react hooks in reactjs","react hooks","define react hooks"];
    const router = ["react router","router","what is react router","define react router","react router in reactjs"];
    const reprops = ["what is props","props in reactjs","props","define props"];
    const lifeCycle = ["react life cylce methods ","life cycle","life cycle method","what is life cycle method","define life cycle method","life cycle method in reactjs"];
    const states = ["react state","react state","what is state","define state","state in reactjs","what is states","react states"]; 
    const form = ["what is reactjs forms","define reactjs forms","forms in reactjs","forms in react","reactjs forms"];
    const reactjskeys = ["what is reactjs keys","reactjs keys","define react js keys", "keys in reactjs"];
    const dom = ["what is dom","what is virtual dom","virtual dom in reactjs","define virtual dom"];
    const binding =["what is one way data binding", "one way data binding", "define one way data binding"," one way data binding in reactjs"];
    const renderElements = ["what is rendering elements", "what is rendering elements in reactjs","define rendering elements","define rendering elements in reactjs", "rendering elements in reactjs"];
    const conditionalRender =["what is conditional rendering","conditional rendering","define conditional rendering","conditional rendering in reactjs"];
    const reactFragments = ["what are all fragments", "fragments in reactjs", "fragments"];
    const controlCompo = ["what are all controlled components","controlled components","define controlled components"];
    const uncontrolCompo  = ["what are all uncontrolled components","uncontrolled components","define uncontrolled components"];
    const reactApi = [ "react context api" , "What is react context api" , "define react context api"];
    const redux = ["what is redux","redux","define redux"];
    const okDa = ["What is useeffect hook used for","useeffect hook used for","define useeffect hook used for"];
    const okDone = ["What is usememo hook used for","usememo hook used for","define usememo hook used for"];
    const suspenseReact = ["what is suspense in reacts","suspense in react","define suspense in react"];
    const errorBoundaires = ["error boundaries , error boundaries in reactjs","define error boundaries"];
    const HigheroderComponents = ["what is hoc","high order components","define hoc","hoc"]; 

    const matchesAny = (patterns) => patterns.some((p) => s === p);

    if (matchesAny(basicsofreactjs)) {
      return "Basics of reactjs , Basic topics in React JS include 1.JSX   2.React component  3.React Hooks \n\n" +
     "4.React Router  5.Props  6.Components  7.React lifecycle methods  8.React State  9.Reactjs Forms   10.Reactjs keys 11.Virtual DOM 12.One-way data binding 13.Reactjs rendering elements 14.Conditional rendering\n\n"+
     "Addition topics: 1. Fragments 2.Controlled components 3.Uncontrolled components 4. useEffect hook used for 5. useMemo hook used for 6.Suspense in reactjs 7.Error boundaires 8. high order components HOC";  
    }

    
    if (matchesAny(HigheroderComponents)){
      return "A function that takes a component and returns a new component with extra features.";
    }

    if (matchesAny(errorBoundaires)){
      return " Special components that catch JavaScript errors anywhere in their child component tree and display fallback UI.";
    }


     if (matchesAny(suspenseReact)){
      return "Suspense allows components to wait for something (like lazy-loaded code or data fetching) before rendering.";
     }

    
     if (matchesAny(okDone)){
      return "It memoizes the result of a computation to avoid re-calculating on every render, improving performance.";
     }

     if (matchesAny(okDa)){
      return "It handles side effects in functional components, like fetching data, subscriptions, or manually updating the DOM.";
     }
  
    if (matchesAny(redux)){
      return "Redux is a state management library that stores the application’s state in a single central store.";
    }

    if (matchesAny(reactApi)){
      return " It provides a way to pass data deeply into the component tree without prop drilling.";

    }


    if (matchesAny(uncontrolCompo)){
      return "Uncontrolled: The uncontrolled components Form data is handled by the DOM itself (using ref).";
    }


    if (matchesAny(controlCompo)){
      return "Controlled:The controlled components Form data is handled by React state.";
    }

    if (matchesAny(reactFragments)){
      return "Fragments let you group multiple child elements without adding extra nodes to the DOM. Written as <></>.";
    }

    if (matchesAny(conditionalRender)){
      return "Conditional rendering in React is the process of displaying different UI elements or components based on specific conditions. This allows for dynamic and responsive user interfaces that adapt to various scenarios, such as user authentication status, data availability, or application state.\n \n "+
      "1. Using If/Else Statements: If/else statements allow rendering different components based on conditions. This approach is useful for complex conditions. 2. Using Ternary Operator: The ternary operator (condition ? expr1: expr2) is a concise way to conditionally render JSX elements. It’s often used when the logic is simple and there are only two options to render.\n\n"+
      "3. Using Logical AND (&&) Operator: The && operator returns the second operand if the first is true, and nothing if the first is false. This can be useful when you only want to render something when a condition is true.\n\n"+
      "4. Using Switch Case Statements: Switch case statements are useful when you need to handle multiple conditions, which would otherwise require multiple if conditions. This approach can be more readable if there are many conditions to check. 5. Conditional Rendering in Lists (Using .map()) Conditional rendering can be helpful when rendering lists of items conditionally. You can filter or map over an array to selectively render components based on a condition.\n\n"+
      "6. Conditional Rendering with Component State: You can also manage conditional rendering based on the component's state. For example, you can show a loading spinner until some data is fetched, and then display the actual content once the data is ready.";
    }

    if (matchesAny(renderElements)){
      return "Rendering elements in ReactJS involves the process of displaying user interface (UI) components and elements on the screen. React utilizes a virtual DOM to optimize this process, ensuring efficient updates to the actual DOM.\n \n"+
      "They are plain JavaScript objects describing the UI structure. Unlike browser DOM elements, React elements are lightweight and immutable.\n \n"+
      "Unlike browser DOM elements, React elements are lightweight and immutable. React uses these elements to build a virtual DOM and then efficiently update the real DOM.\n \n"+
      "How It Works- 1. State Management: The useState hook manages the currentTime state. 2.Side Effects: The useEffect hook sets up an interval to update the time every second and cleans up on component unmount to prevent memory leaks. 3.Efficient Updates: Only the time in the <h2> element is re-rendered, leaving the static <h1> unchanged.";
    }

    if (matchesAny(binding)){
      return "One-way data binding in React refers to the unidirectional flow of data within a React application, primarily from parent components to child components. This means that data originates from a source (like a component's state or props) and flows down to the user interface (UI) elements that display that data."+
      "1.Parent components pass data down to child components via props. 2.Child components cannot directly modify the props they receive; they are read-only.\n\n"+
      "3.The view automatically re-renders when the state or props change. 4.The component controls the data, with user interactions updating the state explicitly via event handlers.\n\n"+
      "1. Model The model in React represents the data in your application. It can be stored in various places, such as in component state, props, or through more complex state management libraries like Redux.\n\n"+
      "State: This holds the model data (i.e., variables that can change over time). Props: These are the values passed from parent components to child components.\n\n"+
      "2. View: The view is the visual representation of the data In React, the view is defined by the JSX (a syntax extension for JavaScript), which renders the UI based on the state and props.\n\n"+
      "1. Initial Rendering: When the component renders, React looks at the model (state or props), and based on the data, it renders the view (UI).\n \n"+
      "2. State/Props Change: If the model (state or props) changes, React re-renders the component and updates the UI accordingly.\n \n"+
      "3. User Interaction: If a user interacts with the UI (e.g., clicks a button, types in an input field), an event handler is triggered, which updates the state or model. 4. Re-render: React then triggers a re-render to update the view based on the new model values.";
    }

    if (matchesAny(dom)){
      return "The Virtual DOM (VDOM) in React JS is an in-memory, lightweight representation of the actual Document Object Model (DOM) of a web page. It is a core concept that enables React to efficiently update and render user interfaces.\n\n"+
      "1.In-memory representation: When you build a UI with React, instead of directly manipulating the browser's real DOM, React creates a virtual copy of it using JavaScript objects. This virtual representation mirrors the structure and content of the actual DOM.\n\n"+
      "2. State and prop changes: When a component's state or props change, React doesn't immediately update the real DOM. Instead, it creates a new Virtual DOM tree that reflects these changes.\n\n"+
      "3.Diffing algorithm: React then compares this new Virtual DOM tree with the previous one (a snapshot taken before the update). This comparison process, known as diffing, identifies the minimal set of changes required to update the UI.\n\n" +
      "4. Reconciliation and batch updates: Once the differences are determined, React calculates the most efficient way to apply these changes to the actual DOM. It then batches these updates and applies them to the real DOM in a single, optimized operation. This process of syncing the Virtual DOM with the real DOM is called reconciliation.\n\n"+
      "Benefits of VDOM - 1.Performance optimization: Directly manipulating the real DOM can be slow and resource-intensive. The Virtual DOM minimizes direct DOM interactions by identifying and applying only the necessary changes, leading to faster and more efficient UI updates.\n \n"+
      "2.Declarative programming: Developers can focus on describing the desired UI state, and React handles the underlying DOM manipulation, simplifying development and making code more predictable.\n\n"+
      "3.Cross-platform compatibility: The Virtual DOM concept allows React to be used for various platforms (web, mobile with React Native), as it abstracts away platform-specific DOM manipulation details.";

    }

    if (matchesAny(reactjskeys)){
      return "A key serves as a unique identifier in React, helping to track which items in a list have changed, been updated, or removed. It is particularly useful when dynamically creating components or when users modify the list.\n\n"+
      "When rendering a list, you need to assign a unique key prop to each element in the list. This helps React identify which elements have changed, been added, or been removed."; 
    }

    if (matchesAny(form)) {
      return "In React, forms are used to take input from users, like text, numbers, or selections.\n\n"+
      "They work just like HTML forms but are often controlled by React state so you can easily track and update the input values.";
      }
    

    if (matchesAny(states)){
      return "Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.\n \n"+
      "1.useRef: declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.\n\n"+
      "2.useImperativeHandle: lets you customize the ref exposed by your component. This is rarely used.\n\n"+
      "3.useEffect: connects a component to an external system. 4.useState declares a state variable that you can update directly.\n\n"+
      "5.useReducer: declares a state variable with the update logic inside a reducer function. 6.useLayoutEffect fires before the browser repaints the screen. You can measure layout here.\n\n"+
      "7.useInsertionEffect: fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.\n\n"+
      "9.useMemo: lets you cache the result of an expensive calculation. 10.useCallback lets you cache a function definition before passing it down to an optimized component.\n\n"+
      "11.useTransition: lets you mark a state transition as non-blocking and allow other updates to interrupt it. 12.useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.\n\n"+
      "13. useDebugValue: lets you customize the label React DevTools displays for your custom Hook. 14.useId: lets a component associate a unique ID with itself. Typically used with accessibility APIs."+
      "15.useSyncExternalStore: lets a component subscribe to an external store. 16:useActionState allows you to manage state of actions.";
    }


    if (matchesAny(lifeCycle)){
      return "In React, the lifecycle refers to the various stages a component goes through. These stages allow developers to run specific code at key moments, such as when the component is created, updated, or removed. By understanding the React lifecycle, you can better manage resources, side effects, and performance. These phases allow you to run specific code at key moments in a component's life, such as when its created, updated, or removed from the screen.\n\n" +
      "1.Mounting: Initializes, renders, and mounts the component componentDidMount. 2.Updating: Handles state/prop changes, re-renders, and updates componentDidUpdate.\n\n"+
      "3. Unmounting: Cleans up before removal componentWillUnmount."; 
    }

    if (matchesAny(reprops)){
      return "Hey buddy ! In ReactJS, props short for properties are a mechanism for passing data from a parent component to a child component. They are a fundamental concept for building reusable and dynamic user interfaces.\n\n"+
      "Characteristics of props in React: 1.Data Transfer 2.Read-Only (Immutable) 3.Similar to HTML Attributes 4.Object Structure 5.Enabling Reusability.";

    }
    
    if (matchesAny(router)){
      return "React Router is a JavaScript library designed specifically for React to handle client-side routing. It maps specific URL paths to React components, allowing users to navigate between different pages or sections without refreshing the entire page.\n \n"+
      "There are three types of routers BrowserRouter: 1.The BrowserRouter is the most commonly used router for modern React applications. It uses the HTML5 History API to manage routing, which allows the URL to be dynamically updated while ensuring the browser's address bar and history are in sync.\n\n"+
      "2.HashRouter: The HashRouter is useful when you want to use a URL hash (#) for routing, rather than the HTML5 history API. It doesn't require server configuration and works even if the server doesn't support URL rewriting.\n\n"+
      "3.MemoryRouter: The MemoryRouter is used in non-browser environments, such as in React Native or when running tests.";
      
    }

    if (matchesAny(jsx) || s.includes("jsx")) {
      return "This funny tag syntax is neither a string nor HTML.It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like.\n\n "+
      "JSX may remind you of a template language, but it comes with the full power of JavaScript.JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.\n\n"+
      "Why JSX? React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.\n\n"+
       "Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.\n\n"+
       "We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.\n\n" +
       "We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.\n\n"+
       "t also allows React to show more useful error and warning messages.";}
    if (matchesAny(components)){
      return "(i)Reusability:Components can be used multiple times throughout an application, promoting code efficiency and consistency.\n\n"+
      "(ii)Encapsulation:Each component manages its own state and props, isolating its logic and preventing unintended side effects on other parts of the application.\n\n"+
      "(iii)Declarative:Components describe what should be rendered on the screen based on their current state and props, rather than how to manipulate the DOM directly.\n\n"+
      "(iv)Composition:Components can be nested within each other to create more complex UIs, forming a hierarchical structure similar to a tree.\n\n"+
      "There are two primary types of React components:\n\n"+
      "1.Function Components: These are JavaScript functions that accept props (properties) as an argument and return React elements (which describe what should be rendered). They are the preferred method for creating components in modern React development due to their simplicity and readability.\n\n"+
      "2.Class Components: These are ES6 classes that extend React.Component and must include a render() method that returns React elements. While still supported, they are generally less common in new code compared to function components.";}
    
    
    if (matchesAny(reacthooks)){
      return "Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.\n \n"+
      "1.useRef: declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.\n\n"+
      "2.useImperativeHandle: lets you customize the ref exposed by your component. This is rarely used.\n\n"+
      "3.useEffect: connects a component to an external system. 4.useState declares a state variable that you can update directly.\n\n"+
      "5.useReducer: declares a state variable with the update logic inside a reducer function. 6.useLayoutEffect fires before the browser repaints the screen. You can measure layout here.\n\n"+
      "7.useInsertionEffect: fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.\n\n"+
      "9.useMemo: lets you cache the result of an expensive calculation. 10.useCallback lets you cache a function definition before passing it down to an optimized component.\n\n"+
      "11.useTransition: lets you mark a state transition as non-blocking and allow other updates to interrupt it. 12.useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.\n\n"+
      "13. useDebugValue: lets you customize the label React DevTools displays for your custom Hook. 14.useId: lets a component associate a unique ID with itself. Typically used with accessibility APIs.\n\n"+
      "15.useSyncExternalStore: lets a component subscribe to an external store. 16:useActionState allows you to manage state of actions.";
    }

    if (s.includes("who are you") || s.includes("hi")) {
      return "I'm Reactjs Bot By Badri — a small React demo that answers Basic level reactjs questions, Search related topics.";
    }
    return null;
  }

  function pushUserMessage(text) {
    setMessages((prev) => [...prev, { who: "user", text }]);
  }

  function pushBotMessage(text) {
    setMessages((prev) => [...prev, { who: "bot", text }]);
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    pushUserMessage(trimmed);
    setInput("");

    setTimeout(() => {
      const reply = detectReply(trimmed);
      if (reply) {
        pushBotMessage(reply);
      } else {
        pushBotMessage("Sorry, I didn't catch that. Search related keywords, please try again!");
      }
    }, 260);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className={`chat-box ${theme}`}>
      {/* Header */}
      <div className="chat-header">
        <h1>React-jsbot By Badri</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Light" : "Dark"}
        </button>
      </div>

      {/* Messages */}
      <div className="messages">
        {messages.map((m, idx) => (
          <div key={idx} className={`message ${m.who === "user" ? "user" : "bot"}`}>
            {m.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search about Reactjs..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}