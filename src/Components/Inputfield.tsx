import React, { ChangeEvent, useRef, useState } from 'react'
import './styles.css'

const Inputfield = ({ myRef }: { myRef: React.RefObject<HTMLInputElement> }) => {

    const [toDo, setToDo] = useState<string>('');
    const ipRef = useRef<HTMLInputElement>(null);
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setToDo(e.target.value); // e.target.value inside handleInputChange refers to the value of the input element that triggered the onChange event
    };
    // In pure React without TypeScript, you're not required to specify the type of the event (e) explicitly as you do in TypeScript
    // const handleInputChange = (e) => {
    //   setToDo(e.target.value); // e.target.value inside handleInputChange refers to the value of the input element that triggered the onChange event
    // };

    const addList = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent default form submission behavior
      const newElement = document.createElement('div');
      newElement.textContent = toDo;
      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="delete_svg"><g fill="none" fill-rule="evenodd" stroke="#4A4A4A"><path d="M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z"></path><path stroke-linecap="round" d="M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09"></path><rect width="18" height="3" x="3.5" y="4.5" rx="1.5"></rect></g></svg>'
      newElement.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", ()=>{
        myRef.current?.removeChild(newElement)
      })
      newElement.classList.add("new_div");
      deleteBtn.classList.add("delete_btn")
      myRef.current?.appendChild(newElement);

      if (ipRef.current) {
        ipRef.current.value = ""; // in this way we can use the property of any HTML element to any function usign 'ref.current'
      }
    };
  
    return (
      <form className='input' onSubmit={addList}> {/* Use onSubmit event */}
        <input
          type="input"
          placeholder='Enter a task'
          className='input_box'
          value={toDo}
          onChange={handleInputChange}
          ref={ipRef}
        />
        <button className='input_submit' type="submit">Go</button> 
        {/* if you write onClick/onSubmit event in the button: The issue might be related to form submission, causing the page to refresh and the new element to disappear. */}
      </form>
    );
  };
   

export default Inputfield
