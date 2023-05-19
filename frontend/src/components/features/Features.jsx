import React from "react"
import "../features/features.css"
import Item from "../item/item";
import ChatIcon from "../../assets/icon-chat.webp"
import ChatMoney from "../../assets/icon-money.webp"
import ChatSecurity from "../../assets/icon-security.webp"
const details = [
  {
    id: 1,
    img: ChatIcon,
    title: "You are our #1 priority",
    text: `Need to talk to a representative? You can get in touch through our
    24/7  chat or through a phone call in less than 5 minutes.`,
  },
  {
    id: 2,
    img: ChatMoney,
    title: "More savings means higher rates",
    text: `The more you save with us, the higher your interest rate will be!`,
  },
  {
    id: 3,
    img: ChatSecurity,
    title: "Security you can trust",
    text: ` We use top of the line encryption to make sure your data and money
    is always safe.`,
  },
];
function Features(){
  return(
<div className="features">
<h2 className="sr-only">Features</h2>
{details.map((detail) => (
        <Item
          img={detail.img}
          title={detail.title}
          text={detail.text}
          key={detail.id}
        />
      ))}
</div>
)}
export default Features;