import{j as t}from"./jsx-runtime.D_zvdyIk.js";function n({experience:e,translations:s,side:a}){const o=e.technologies.join(" - "),r=s.description,i=a==="left"?"md:animate-fade-in-left":"md:animate-fade-in-right";return t.jsxs("div",{className:`
        ${i}
        bg-gradient-to-br from-gray-800 to-gray-900 
        hover:from-gray-700 hover:to-gray-800
        p-4 sm:p-5 md:p-6 rounded-lg w-full max-w-3xl 
         hover:border-indigo-500
        shadow-xl hover:shadow-2xl
        transition-all duration-500 ease-out
        hover:scale-105
        backdrop-blur-sm
      `,style:{boxShadow:"0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)"},children:[t.jsxs("h1",{className:"text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",children:[s.company," - ",s.position]}),t.jsxs("p",{className:"text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3",children:[e.location," | ",e.period]}),t.jsxs("p",{className:"text-gray-300 text-sm sm:text-base mb-2 sm:mb-3",children:["Stack : ",t.jsx("span",{className:"font-medium text-indigo-300"}),t.jsx("span",{className:"block sm:inline mt-1 sm:mt-0",children:o})]}),t.jsx("p",{className:"text-gray-300 text-sm sm:text-base leading-relaxed",children:r})]})}export{n as default};
