import React from "react";
import "./Filter.css";
import { GrDown } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import {HiChevronDoubleLeft} from 'react-icons/hi'
import { useStates } from "../../States";

const Filter = () => {
    const {setFilterShow} = useStates();
    const backTag=()=>{
        setFilterShow(false);
    }
  return (
        <div className="filter_wrapper">
          <div className="filter_container">
            <p onClick={backTag} className="back"><HiChevronDoubleLeft className="tag"/> back</p>
            <div className="category_filter">
              <p className="filter">
                Category <GrDown />
              </p>
              <div className="filter_option_list">
                <ul>
                  <li>
                    <button className="btn btn-selected" value="all">
                      All
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="fruits">
                      Fruits
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="egitables">
                      Vegitables
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="staples">
                      Staples
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="snakes">
                      Snakes
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="packedfoods">
                      Packed foods
                    </button>
                  </li>
                  <li>
                    <button className="btn" value="dairyandegg">
                      Dairy & egg
                    </button>
                  </li>
                </ul>
              </div>
              <p className="filter">
                Rating <GrDown />
              </p>
              <div className="filter_option_list">
                <ul>
                  <li>
                    <button className="btn" value={5}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </button>
                  </li>
                  <li>
                    <button className="btn" value={4}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </button>
                  </li>
                  <li>
                    <button className="btn" value={3}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </button>
                  </li>
                  <li>
                    <button className="btn" value={2}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </button>
                  </li>
                  <li>
                    <button className="btn" value={1}>
                      <AiFillStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Filter;
