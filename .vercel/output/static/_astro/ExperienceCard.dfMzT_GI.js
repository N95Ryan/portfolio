import{j as e}from"./jsx-runtime.D_zvdyIk.js";function n({experience:s,translations:t,side:a}){const i=s.technologies.join(" - "),o=a==="left"?"md:animate-fade-in-left":"md:animate-fade-in-right";return e.jsxs("div",{className:`
        ${o}
        bg-gradient-to-br from-gray-800 to-gray-900 
        hover:from-gray-700 hover:to-gray-800
        p-4 sm:p-5 md:p-6 rounded-lg w-full max-w-3xl 
         hover:border-indigo-500
        shadow-xl hover:shadow-2xl
        transition-all duration-500 ease-out
        hover:scale-105
        backdrop-blur-sm
      `,style:{boxShadow:"0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.1)"},children:[e.jsxs("h1",{className:"text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",children:[t.company," - ",t.position]}),e.jsxs("p",{className:"text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3",children:[s.location," | ",t.period]}),e.jsxs("p",{className:"text-gray-300 text-sm sm:text-base mb-2 sm:mb-3",children:["Stack: ",e.jsx("span",{className:"font-medium text-indigo-300"}),e.jsx("span",{className:"block sm:inline mt-1 sm:mt-0",children:i})]}),e.jsx("ul",{className:"text-gray-300 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1 sm:space-y-2",children:t.description.map((r,m)=>e.jsx("li",{className:"pl-2",children:r},m))})]})}export{n as default};
