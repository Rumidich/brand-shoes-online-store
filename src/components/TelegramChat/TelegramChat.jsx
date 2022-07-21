import React from "react";
import "../TelegramChat/chat.css";

const TelegramChat = () => {
  return (
    <>
      <input class="chat-menu hidden" id="offchat-menu" type="checkbox" />

      <div class="sticky-button blink_me" id="sticky-button">
        <label className="sen" htmlFor="offchat-menu">
          <img
            style={{
              width: "50px",
              height: "45px",
              borderRadius: "100px",
            }}
            src="https://static.vecteezy.com/system/resources/previews/002/534/047/original/social-media-whatsapp-black-logo-mobile-app-icon-free-free-vector.jpg"
          />
        </label>
      </div>

      <div class="sticky-chat">
        <div class="chat-content">
          <div class="chat-header">
            <svg viewBox="0 0 32 32">
              <path d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z" />

              <rect style={{ height: "2", width: "2", x: "19", y: "9" }} />

              <rect style={{ height: "2", width: "2", x: "14", y: "9" }} />

              <rect style={{ height: "2", width: "2", x: "24", y: "9" }} />

              <path d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z" />
            </svg>

            <div class="title">
              {" "}
              Sneakers Store<span>Discuss about something?</span>
            </div>
          </div>

          <div class="chat-text">
            <span>Hello, How can we help you?</span>

            <span class="typing">
              <svg viewBox="0 0 512 512">
                <circle style={{ cx: "256", cy: "256", r: "48" }} />

                <circle style={{ cx: "416", cy: "256", r: "48" }} />

                <circle style={{ cx: "96", cy: "256", r: "48" }} />
              </svg>
            </span>
          </div>
        </div>

        <span>
          <input
            class="schat"
            type="text"
            placeholder="Start chat... "
            autoFocus
          />
        </span>

        <a
          className="chat-button"
          href="https://wa.me/message/52KPNQFRU2TFP1"
          rel="nofollow noreferrer"
          target="_blank">
          <svg viewBox="0 0 32 32" style={{ fill: "#0091EA" }}>
            <path
              class="cls-1"
              d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default TelegramChat;
