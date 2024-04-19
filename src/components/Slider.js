import { useEffect } from "react";
import React, { useState } from 'react'

export const BannerSlider = (props) => {
  const [CurrenIndex, SetCurrentIndex] = useState(0);
  const SliderItems = props.List;

  //Change the current index depending on what button was pressed
  const ScrollToItem = (Direction) => {
    if (Direction == "Previous") 
    {
      SetCurrentIndex(Index => {
        return Index <= 0 ? SliderItems.length - 1 : Index - 1;
      });
    }
    else if (Direction == "Next")
    {
      SetCurrentIndex(Index => {
        return Index >= SliderItems.length - 1 ? 0 : Index + 1;
      } );
    }
  }

  //Jump directly to index selected on dot menu
  const JumpToItem = (Index) => {
    SetCurrentIndex(Index);
  }

  //HTML section
  return (
    <div className="Slider">
      {/* The slider container will move according to its width multiplied by the index */}
      <ul className="Items-Container" 
          style={{  transform: `translateX(-${CurrenIndex * 100}%)`, 
                    transition: "1s"}}>
        {/* Iterate over each item of Element list and create a unordered list with a List index */}
        {SliderItems.map((Item, Index) => {
          return <li key={Index}>{Item}</li>
        })}
      </ul>

      {/* Dot menu to select directly index on slider */}
      <ul className="Dot-Menu">
        {SliderItems.map((Item, Index) => {
          return <li  key={Index} onClick={() => JumpToItem(Index)}
                      className={`${Index == CurrenIndex ? "Selected" : ""}`}></li>
        })}
      </ul>

      {/* Left arrow of the slider */}
      <div class="Left-Arrow" onClick={() => ScrollToItem("Previous")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
      </div>

      {/* Right arrow of the slider */}
      <div class="Right-Arrow" onClick={() => ScrollToItem("Next")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
      </div>
    </div>
  )
}
