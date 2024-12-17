const AuthImagePattern = ({ title, subtitle, theme }) => {
  const messages = [
    { text: "Hello!", sender: "user" },
    { text: "Hi there!", sender: "bot" },
    { text: "How can I help you today?", sender: "bot" },
    { text: "I need some information.", sender: "user" },
    { text: "Sure, what do you need to know?", sender: "bot" },
    { text: "Tell me about your services.", sender: "user" },
    { text: "We offer a variety of services including...", sender: "bot" },
  ];

  return (
    <div className={`hidden lg:flex items-center justify-center bg-base-200 p-12 theme-${theme}`}>
      <div className="max-w-md w-full">
        <div className="flex flex-col space-y-3 mb-8">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
                message.sender === "user"
                  ? `bg-primary text-primary-content self-start animate-fade-in-left`
                  : `bg-secondary text-secondary-content self-end animate-fade-in-right`
              }`}
            >
              <p className="text-left">{message.text}</p>
            </div>
          ))}
          <div className="self-end flex items-center space-x-1 animate-fade-in-right">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-base-content/60 text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;