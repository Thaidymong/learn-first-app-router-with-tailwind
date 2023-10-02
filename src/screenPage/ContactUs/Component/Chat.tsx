"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export default function Chat() {
  return (
    <>
      <div className="flex flex-wrap pt-[100px]">
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4 max-w-md">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                placeholder="dymongthai@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" required type="password" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="chat-container">
            <div className="w-[100%]">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble">
                  It was said that you would, destroy the Sith, not join them.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/dymong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-error">
                  It's never happened before.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble">
                  It was you who would bring balance to the Force
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble">Not leave it in Darkness</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/dymong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-warning">
                  To be on the Council at your age.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-primary">
                  What kind of nonsense is this
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-secondary">
                  Put me on the Council and not make me a Master!??
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/mong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-accent">
                  That's never been done in the history of the Jedi. It's
                  insulting!
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/dymong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-info">
                  Calm down, Anakin.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/dymong.jpg" />
                  </div>
                </div>
                <div className="chat-bubble chat-bubble-success">
                  You have been given a great honor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
