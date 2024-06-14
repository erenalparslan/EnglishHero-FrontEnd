import React, { useState, useEffect } from "react";
import { Card, Divider } from "antd";
import axios from "axios";
import "./Home.css";
import {data} from "../data/post";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const { Meta } = Card;
  const url = "http://localhost:6061/api/words";
  useEffect(() => {
    // Axios ile veri çekme işlemini simüle ediyoruz
    axios
      .get(url)
      .then((response) => {
        setPostList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        console.log("erens")
        setPostList(data)
        setLoading(false);
      });

  }, []);
  return (
    <div className="post-page">
      <Divider>Posts</Divider>
      <div className="post-grid">
        {postList.map((post) => (
         (post.englishWord !== "" || post.turkishWord !== "") ? (
            <Card key={post.id} style={{ width: 300, margin: "20px" }}>
              <Meta title={post.englishWord} description={post.turkishWord} />
            </Card>
          ) : null
        
        ))}
      </div>
    </div>
  );
}
