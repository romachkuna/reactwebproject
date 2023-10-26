import ChatBot from "react-simple-chatbot";

const config = {
  width: "300px",
  height: "400px",
  floating: true,
  botAvatar:"https://cdn-icons-png.flaticon.com/512/1698/1698535.png",        
  userAvatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU",          
  floatingIcon:"https://cdn-icons-png.flaticon.com/512/1698/1698535.png",
};


const steps = [
{
  id: "1",
  message: "Hi, I'm your guide!",
  trigger: "2",
},
{
  id: "2",
  message: "How can i help you today?",
  trigger: "3",
},
{
  id: "3",
  options: [
    { value: 1, label: "Get a recommendation", trigger: "4" },
    { value: 2, label: "My account and orders", trigger: "24" },
    { value: 3, label: "Leave us a note", trigger: "13" },
    { value: 4, label: "About us", trigger: "3" },
  ],
},
{
  id: "4",
  options: [
    { value: 1, label: "kindofproduct1", trigger: "5" },
    { value: 2, label: "kindofproduct2", trigger: "5" },
    { value: 3, label: "kindofproduct3", trigger: "5" },
    { value: 4, label: "kindofproduct4", trigger: "5" },
    { value: 5, label: "None 🚫", trigger: "5" },
  ],
},
{
  id: "5",
  message: "Any other likes or lifestyle preferences we should consider?",
  trigger: "6",
},
{
  id: "6",
  options: [
    { value: 1, label: "Yes", trigger: "7" },
    { value: 2, label: "No", trigger: "8" },
  ],
},
{
  id: "7",
  options: [
    { value: 1, label: "Moreproductattribute1", trigger: "8" },
    { value: 2, label: "Moreproductattribute2", trigger: "8" },
    { value: 3, label: "Moreproductattribute3", trigger: "8" },
    { value: 4, label: "Moreproductattribute4", trigger: "8" },
    { value: 5, label: "None 🚫", trigger: "8" },
  ],
},
{
  id: "8",
  message: "Got it! Are there any product attributes you dislike?",
  trigger: "9",
},
{
  id: "9",
  options: [
    { value: 1, label: "Moreproductattributes1", trigger: "10" },
    { value: 2, label: "Moreproductattributes2", trigger: "10" },
    { value: 3, label: "Moreproductattributes3", trigger: "10" },
    { value: 4, label: "Moreproductattributes4", trigger: "10" },
    { value: 5, label: "None 🚫", trigger: "10" },
  ],
},
{
  id: "10",
  message: "Which type of product would you like to see?",
  trigger: "11",
},
{
  id: "11",
  options: [
    { value: 1, label: "producttype1", trigger: "12" },
    { value: 2, label: "producttype2", trigger: "12" },
    { value: 3, label: "producttype3", trigger: "12" },
    { value: 4, label: "producttype4", trigger: "12" },
  ],
},
{
  id: "12",
  options: [
    { value: 1, label: "Get Another recommendation", trigger: "4" },
    { value: 2, label: "Back to Main Options", trigger: "3" },
  ],
},
{
  id: "13",
  message: "Let me see which of our Care Associates is available to help.",
  trigger: "14",
},
{
  id: "14",
  message: "So sorry, but our Care Associates are not available right now.",
  trigger: "15",
},
{
  id: "15",
  message: "In the meantime, would you like to email us?",
  trigger: "16",
},
{
  id: "16",
  options: [{ value: 1, label: "📧 Email", trigger: "17" }],
},
{
  id: "17",
  message: "Send us an email at something@something.something.",
  trigger: "19",
},
{
  id: "19",
  options: [
    { value: 1, label: "Back to Main Options", trigger: "3" },
    { value: 2, label: "Ok, Thakns", trigger: "20" },
  ],
},
{
  id: "20",
  message:
    "We are always looking to improve, so we would love to know: how satisfied were you with help?",
  trigger: "21",
},
{
  id: "21",
  options: [
    { value: 1, label: "⭐⭐⭐⭐⭐", trigger: "22" },
    { value: 2, label: "⭐⭐⭐⭐", trigger: "22" },
    { value: 3, label: "⭐⭐⭐", trigger: "23" },
    { value: 4, label: "⭐⭐", trigger: "23" },
    { value: 5, label: "⭐", trigger: "23" },
  ],
},
{
  id: "22",
  message: "Glad I could help! Please come back soon. 🎉",
},
{
  id: "23",
  message:
    "Sorry I couldn not be more helpful! If you would like, I am happy to get you over to one of our Associates who can lend a hand. Let me know!",
  trigger: "17",
},
{
  id: "24",
  options: [
    { value: 1, label: "Update my address", trigger: "" },
    { value: 2, label: "My payments and billing", trigger: "" },
    { value: 3, label: "Trouble Logging In", trigger: "" },
    { value: 4, label: "My orders", trigger: "" },
    { value: 5, label: "Go back", trigger: "3" },
  ],
},
{
  id: "25",
  message:
    "We process payments and orders each Sunday at 6pm so that everyone can get their product when they expect it. Unfortunately, it is too late to make changes or skip your order for this week because it is already been processed. If you would like, I am happy to connect you with one of our Care Associates to see if they can try to help.",
  trigger: "26",
},
{
  id: "26",
  options: [
    { value: 1, label: "Back to Main Options", trigger: "3" },
    { value: 2, label: "My payments and billing", trigger: "" },
  ],
},

// {
//   id: "27",
//   component: (
//     <div> This is a example component with <a href="https://lucasbassetti.com.br/react-simple-chatbot/#/docs/steps">link_text</a> </div>
//   ),
// },
];




function Chatbot() {
    

  return (
    <>
      <ChatBot
        steps={steps}
        {...config}
      />
    </>
  );
}

export default Chatbot;
