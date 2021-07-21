import React from "react";
import "../styles/Global.css";
import "../styles/Faq.css";
import GreenNav from "../components/GreenNav";
import GreenScroll from "../components/GreenScroll";
import GreenFooter from "../components/GreenFooter";

const FAQPage = () => {
  return (
    <div className="faqpage">
      <GreenNav />
      <GreenScroll />

      <div className="faq-container">
        <div className="faq">
          <h1 className="f">Frequently</h1>
          <h1 className="a">Asked</h1>
          <h1 className="q">Questions</h1>
          <h1 className="questionmark">?</h1>
        </div>
        <ul className="questions">
          <li>Fames ac turpis egestas integer eget aliquet nibh praesent?</li>
          <li>Bibendum ut tristique et egestas?</li>
          <li>Eget sit amet tellus cras adipiscing enim eu turpis egestas?</li>
          <li>Rhoncus urna neque viverra justo nec ultrices dui sapien?</li>
          <li>At elementum eu facilisis sed odio morbi quis?</li>
          <li>
            Pharetra pharetra massa massa ultricies mi quis hendrerit dolor?
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua?
          </li>
          <li>Quisque id diam vel quam elementum pulvinar?</li>
          <li>
            Integer malesuada nunc vel risus commodo viverra maecenas accumsan
            lacus?
          </li>
          <li>Diam quam nulla porttitor massa id neque aliquam vestibulum?</li>
          <li>
            Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt?
          </li>
          <li>Mi sit amet mauris commodo quis imperdiet massa tincidunt?</li>
          <li>Leo integer malesuada nunc vel risus?</li>
          <li>In dictum non consectetur a erat nam?</li>
          <li>
            Lobortis elementum nibh tellus molestie nunc non blandit massa?
          </li>
        </ul>
      </div>

      <GreenFooter />
    </div>
  );
};

export default FAQPage;
