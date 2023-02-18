import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <Link to={`/details/${item.id}`}>
                <div className="img">
                  <img src={item.cover} alt="gg" />
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <p className="pointer">#{item.category}</p>
                  </div>
                  <div className="link">
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc.slice(0, 180)}...</p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />{" "}
                    <label htmlFor="hh">{item.date}</label>
                    <AiOutlineComment className="icon" />{" "}
                    <label htmlFor="cc">27</label>
                    <AiOutlineShareAlt className="icon" />{" "}
                    <label htmlFor="cc">SHARE</label>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
